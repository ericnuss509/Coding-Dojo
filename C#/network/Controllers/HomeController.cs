using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using network.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace network.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;

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
   
        {
            if (!ModelState.IsValid)
            {
                return View("index");
            }

            var existingUser = _context.users.FirstOrDefault(user => user.Email == userToCreate.Email);

            if (existingUser != null)
            {
                ModelState.AddModelError("UserName", "UserName unavailable.");
                return View("index");

            }
            PasswordHasher<User> Hasher = new PasswordHasher<User>();
            userToCreate.Password = Hasher.HashPassword(userToCreate, userToCreate.Password);
            _context.Add(userToCreate);
            _context.SaveChanges();

            HttpContext.Session.SetInt32("UserId", userToCreate.UserId);

            return RedirectToAction("Dashboard");
        }





        [HttpPost("login")]
        public IActionResult Login(LoginUser userToLogin)
        {
            if (!ModelState.IsValid)
            {
                return View("Index");
            }

            var foundUser = _context.users.FirstOrDefault(user => user.Email == userToLogin.LoginUserName);

            if (foundUser == null)
            {
                ModelState.AddModelError("LoginPassword", "check your password and email because either they dont match or you havent registered");
                return View("Index");
            }

            var hasher = new PasswordHasher<LoginUser>();

            var result = hasher.VerifyHashedPassword(userToLogin, foundUser.Password, userToLogin.LoginPassword);
            if (result == 0)
            {
                ModelState.AddModelError("LoginPassword", "Check your email and password.");
                return View("Index");
            }

            HttpContext.Session.SetInt32("UserId", foundUser.UserId);

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
            ViewBag.pro = _context.users.ToList();
            return View("UserDashboard");
        }






        // [HttpPost("professional")]
        // public IActionResult ProfessionalPage(int UserId)
        // {
        //     int? userId = HttpContext.Session.GetInt32("UserId");
        //     if (userId == null)
        //     {
        //         return RedirectToAction("Index");

        //     }
        //     UserProfession Connect = new UserProfession();
        //     Connect.UserId = UserId;
        //     Connect.ProfessionId = 

        //     return RedirectToAction("ProfessionalPage");
        // }





        [HttpPost("")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction();
        }

    }
}

