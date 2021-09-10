using Microsoft.AspNetCore.Mvc;

namespace razorFum.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public ViewResult Index()
        {
        return View("index");
        }
    
    }

   
}

