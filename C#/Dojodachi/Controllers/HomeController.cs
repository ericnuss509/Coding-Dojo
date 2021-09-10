using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Dojodachi.Models;

namespace Dojodachi.Controllers
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
            Dachi dachi1 = new Dachi
            {
            Fullness = 20,
            Happiness = 30,
            Meals = 3,
            Energy = 50
            };

            return View("Index", dachi1);
        }
        


        [HttpPost]
        [Route("Feed")]
        public IActionResult Feed(Dachi dachi1)
        { 
            Console.WriteLine(dachi1);
            if(dachi1.Meals<1)
            {
                ViewBag.snacks = "You're out of snacks.";
                // Console.WriteLine("situation 1");
                return View("Index", dachi1);
            }
            Random nope = new Random();
            int rand = nope.Next(0,4);
            if(rand == 3)
            {
                dachi1.Energy -=5;
                // Console.WriteLine("situation 2");
                return View("Index", dachi1);
            }
            else
            {
                Random treat = new Random();
                int food = treat.Next(5,11);
                dachi1.Meals -=1;
                dachi1.Fullness +=food;
                // Console.WriteLine("situation 3");
                return View("Index", dachi1);
            }
        }
        [HttpPost]
        [Route("Play")]
        public IActionResult Play(Dachi dachi1) 
        {
            Random nope = new Random();
            int rand = nope.Next(0,4);
            if(rand ==3)
            
            {
                dachi1.Energy -=5;
                return View("Index", dachi1);

            }
            else
            {
                Random playing = new Random();
                int joy = playing.Next(5,11);
                dachi1.Happiness += joy;
                dachi1.Meals -=1;
                return View("Index", dachi1);
            }
        }
        [HttpPost]
        [Route("Work")]

        public IActionResult Work(Dachi dachi1)
        {
            // Working costs 5 energy and earns between 1 and 3 meals
            dachi1.Energy -=5;
            Random carbs = new Random();
            int sus = carbs.Next(1,4);
            dachi1.Meals += sus;
            return View("Index", dachi1);
        }
           
        [HttpPost]
        [Route("Sleep")]

        public IActionResult Sleep(Dachi dachi1)
        {
            dachi1.Energy +=15;
            dachi1.Fullness -=5;
            dachi1.Happiness -=5;
            return View("Index", dachi1);

            // Sleeping earns 15 energy and decreases fullness and happiness each by 5
        }
        [HttpPost("restart")]
        public IActionResult Restart()
        {
            return RedirectToAction("Index");
        }




        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
