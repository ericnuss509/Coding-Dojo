using Microsoft.AspNetCore.Mvc;


namespace portfolioI.Controllers     //be sure to use your own project's namespace!
{
    public class HelloController : Controller   //remember inheritance??
    {
        //for each route this controller is to handle:
        [HttpGet("")]       
        
        public ViewResult Index()
        {
            return View();
        }
        [HttpGet("projects")]
        
        public ViewResult Projects()
        {
            return View();
        }
           
        [HttpGet("contact")]

        public ViewResult Contact()
        {
            return View();
        
        }

      
        
    }
}