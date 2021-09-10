using Microsoft.AspNetCore.Mvc;
using System;

namespace dojoSurvey.Controllers
{
   public class HomeController : Controller
    {
        [HttpGet("")]       

        public ViewResult Index()
        {
            return View();
        }
        [HttpPost]
        [Route("second")]
        public  IActionResult second(string name, string dojo, string favorite, string text)
        {
            ViewBag.Name = name;
            ViewBag.Dojo = dojo;
            ViewBag.Favorite = favorite;
            ViewBag.Text = text;
            return View("Second");
        }
         [HttpPost("form")]
        public ViewResult Form()
        {
            return View("Index");
        }
    
    }

   
}
