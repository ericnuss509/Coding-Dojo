using Microsoft.AspNetCore.Mvc;
using System;

namespace timeDisplay.Controllers
{
   public class HomeController : Controller
    {
        
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
        DateTime CurrentTime = DateTime.Now;
        ViewBag.time = CurrentTime;
        return View("Index");
        }
    
    }
  
}