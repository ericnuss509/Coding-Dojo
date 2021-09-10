using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using login.Models;
public class HomeController : Controller
{
    private readonly MyContext _context;

    public HomeController(MyContext myContext)
    {
        _context = myContext;
    }

    [HttpGet("dashboard")]
    
    public IActionResult Dashboard()
    {
        
        // Console.WriteLine(HttpContext.Session.GetInt32("UserId"));
        int? userId = HttpContext.Session.GetInt32("UserId");

        if(userId == null)
        {
            return RedirectToAction("LogingReg", "Users");
        }

        ViewBag.User = _context
        .Users
        .Find(userId);

        return View();
    }
}