using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using neew.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

// Other using statements
namespace neew.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;

        // here we can "inject" our context service into the constructor
        public HomeController(MyContext context)
        {
            _context = context;
        }




        [HttpGet("")]
        public IActionResult Index()
        {


            return View();
        }





        [HttpPost("register")]
        public IActionResult Register(User userToCreate)
        //this method needs to validate the form
        //save the registerd userinto the data base
        //Log that user into seessison 
        //redirect to a method that renders the Dashboard or user viewpage.
        //MAKE SURE THE USER HAS FILLED OUT THE FORM
        {
            //if check to make sure that the user has filled out form properly
            if (!ModelState.IsValid)
            {
                return View("index");
            }

            //check to make sure the users email doesnt exit
            var existingUser = _context.users.FirstOrDefault(user => user.UserName == userToCreate.UserName);

            if (existingUser != null)
            {
                ModelState.AddModelError("UserName", "UserName unavailable.");
                return View("index");

            }
            //using Microsoft.AspNetCore.Identity; 
            PasswordHasher<User> Hasher = new PasswordHasher<User>();
            userToCreate.Password = Hasher.HashPassword(userToCreate, userToCreate.Password);
            //this adds the user tto the db
            _context.Add(userToCreate);
            //saves it to db
            _context.SaveChanges();

            HttpContext.Session.SetInt32("UserId", userToCreate.UserId);

            return RedirectToAction("Dashboard");
        }





        [HttpPost("login")]
        public IActionResult Login(LoginUser userToLogin)
        // make sure that the form was filled out properly
        // check the db to make sure that the username is in the db
        // validate the password
        // put the user into session
        // redirect to the method that will render the next page
        {
            // check to make sure that the form was properly filled out
            if (!ModelState.IsValid)
            {
                return View("Index");
            }

            // check db to make sure that username does already exist
            var foundUser = _context.users.FirstOrDefault(user => user.UserName == userToLogin.LoginUserName);

            // if it doesnt already exist it would be null, thus triggering this new error message
            if (foundUser == null)
            {
                ModelState.AddModelError("LoginPassword", "check your password and email because either they dont match or you havent registered");
                return View("Index");
            }

            // compare plain text pw to what is stored in db, this is all password magic, i am still unsure how this all works
            var hasher = new PasswordHasher<LoginUser>();

            // to verify the provided password against hash stored in db
            var result = hasher.VerifyHashedPassword(userToLogin, foundUser.Password, userToLogin.LoginPassword);
            if (result == 0)
            {
                // passwords dont match
                ModelState.AddModelError("LoginPassword", "Check your email and password.");
                return View("Index");
            }

            // put the user ID into session
            HttpContext.Session.SetInt32("UserId", foundUser.UserId);

            // direct the user to the method "Dashboard" where the "AllHobbies" view will be rendered
            return RedirectToAction("Dashboard");
        }




        [HttpGet("dashboard")]
        public IActionResult Dashboard()
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if (userId == null)
            {
                return RedirectToAction("Index");

            }
            ViewBag.User = _context.users.Find(userId);
            ViewBag.allHobbies = _context.hobbies.Include(Hobby => Hobby.CreatedBy).Include(Hobby => Hobby.Enthusists).ToList();
            return View("UserDashboard");
        }



        [HttpPost("")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction();
        }




        [HttpGet("create")]
        public IActionResult Create()
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if (userId == null)
            {
                return RedirectToAction("Index");

            }

            ViewBag.allHobbies = _context.hobbies.ToList();
        
            ViewBag.User = userId;
            return View();

            
        }

        [HttpGet("hobby/{HobbyId}")]
        public IActionResult Hobby(int HobbyId)           
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if (userId == null)
            {
                return RedirectToAction("Index");

            }
            ViewBag.User = _context.users.FirstOrDefault(u => u.UserId == userId );
            var chosenHobby = _context.hobbies
                .Include(H => H.Enthusists)
                .ThenInclude(u =>  u.UserWhoLikes)
                .FirstOrDefault(h => h.HobbyId == HobbyId);
                
            return View(chosenHobby);
        }



        [HttpPost("addcreatedhobby")]
        public IActionResult AddCreatedHobby(Hobby hobbyToAdd)
        //Validate that the form was filled out
        //Add the hobby to the db
        //save that change
        //redirect to back to the method that points to the userdashboard.
        {
            if(!ModelState.IsValid)
            {
                return View("Create");
            }
            _context.Add(hobbyToAdd);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [HttpPost("Enthuse")]
        public IActionResult Enthuse(int UserId, int HobbyId)
        {
            UserHobby Enthusiast = new UserHobby();
            Enthusiast.UserId = UserId;
            Enthusiast.HobbyId = HobbyId;
            _context.Enthusists.Add(Enthusiast);
            _context.SaveChanges();
            return Redirect("hobby/"+HobbyId);
        }
        [HttpGet("hobby/all")]
        public IActionResult All()
        {
            var all = _context.hobbies
                .Include(H => H.Enthusists)
                .ToList();
                return View("AllHobby", all);
            
        }
    }


}