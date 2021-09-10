using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using login.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;


namespace login.Controllers
{
    public class UserController : Controller
    {
        private readonly MyContext _context;

        public UserController(MyContext myContext)
        {
            _context = myContext;
        }







        [HttpGet("")]
        public IActionResult LoginReg()
        {
            return View();
        }




        [HttpPost("users")]
        public IActionResult Register(User userToCreate)
        {


            if (!ModelState.IsValid)
            {
                return View("LoginReg");
            }

            var existingUser = _context
            .Users
            .FirstOrDefault(user => user.Email == userToCreate.Email);

            if (existingUser != null)
            {
                ModelState.AddModelError("Email", "Email unavailable.");
                return View("LoginReg");
            }

            PasswordHasher<User> Hasher = new PasswordHasher<User>();
            userToCreate.Password = Hasher.HashPassword(userToCreate, userToCreate.Password);

            _context.Add(userToCreate);
            _context.SaveChanges();

            HttpContext.Session.SetInt32("UserId", userToCreate.UserId);


            return RedirectToAction("Dashboard", "Home");

        }

        [HttpPost("user/login")]
        public IActionResult Login(LoginUser userToLogin)
        {
            if(!ModelState.IsValid)
            {
                return View("LoginReg");
            }
            var foundUser = _context
                .Users
                .FirstOrDefault(user => user.Email == userToLogin.LoginEmail);

            if(foundUser == null)
            {
                Console.WriteLine("user wasn't found");
                ModelState.AddModelError("LoginPassword", "Please check your email password."); 
                return View("LoginReg");
            }
            var hasher = new PasswordHasher<LoginUser>();
            
            // verify provided password against hash stored in db
            var result = hasher.VerifyHashedPassword(userToLogin, foundUser.Password, userToLogin.LoginPassword);


            if(result == null)
            {
                Console.WriteLine("password not matching");
                ModelState.AddModelError("LoginPassword", "Please check your email password."); 
                return View("LoginReg");
            }

            HttpContext.Session.SetInt32("UserId", foundUser.UserId);

            return RedirectToAction("Dashboard", "home");
        }

        [HttpGet("users/logout")]

        public IActionResult Logout()
        {
            HttpContext.Session.Clear();

            return RedirectToAction("LoginReg");
        }















        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
