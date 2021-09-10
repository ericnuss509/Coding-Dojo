using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using modelfun.Models;

namespace modelfun.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

       [HttpGet("")]
        public IActionResult Index()
        {
            string stuff = "Im a string";
            

            return View("Index", stuff);
        }
        [HttpGet("numbers")]
        public IActionResult Numbers()
        {
        int[] numbers = new int[]
        {
            1, 3, 5, 6, 7, 40
        };
            return View(numbers);
        }

        [HttpGet("users")]
        public IActionResult Userlist()
        {
            Person somePerson = new Person()
            {
                FirstName = "Todd",
                LastName = "Rundgren"
            };   
            Person somePerson2 = new Person()
            {
                FirstName = "Todd",
                LastName = "Rundgren2"
            };
               Person somePerson3 = new Person()
            {
                FirstName = "Todd",
                LastName = "Rundgren3"
            };
               Person somePerson4= new Person()
            {
                FirstName = "Todd",
                LastName = "Rundgren4"
            };

            List<Person> users = new List<Person>()
            {
                somePerson, somePerson2, somePerson3, somePerson4
            };
            return View(users);
        }
        [HttpGet("user")]
        public IActionResult User()
        {
            Person somePerson = new Person()
            {
                FirstName = "Todd",
                LastName = "Rundgren"
            };
            return View(somePerson);
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
