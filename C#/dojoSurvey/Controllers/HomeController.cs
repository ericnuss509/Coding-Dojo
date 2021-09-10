using Microsoft.AspNetCore.Mvc;
using System;
using dojoSurvey.Models;

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
        public  IActionResult second(Users yourSurvey)
        {
            if(ModelState.IsValid){
                return View(yourSurvey);
            }
            else{
                return View("Index");
            }
        }
         [HttpGet("form")]
        public ViewResult Form()
        {
            return View("Index");
        }
    
    }

   
}
