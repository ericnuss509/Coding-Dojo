using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using formSubmission.Models;

namespace formSubmission.Controllers
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
            ViewBag.Errors = new List<string>();
            return View();
        }





        [HttpPost("")]
        public IActionResult Create(User user)
        {
        if(ModelState.IsValid)
        {
        // do somethng!  maybe insert into db?  then we will redirect
            return RedirectToAction("NewUser");
        }
        else
        {
        // Oh no!  We need to return a ViewResponse to preserve the ModelState, and the errors it now contains!
            return View("Index");
        }
        }
        [HttpGet("result")]
        public IActionResult NewUser()
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
