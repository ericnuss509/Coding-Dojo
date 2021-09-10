using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using hobby.Models;
using System.Linq; // allows us to use ToList
using Microsoft.EntityFrameworkCore; // allows to Include
public class HomeController : Controller
{
    private readonly MyContext _context;

    public HomeController(MyContext myContext)
    {
        _context = myContext;
    }






    [HttpGet("")]
    public IActionResult Index()
    {
        return View();

    }































    // [HttpGet("dashboard")]

    // public IActionResult Dashboard()
    // {

    //     // Console.WriteLine(HttpContext.Session.GetInt32("UserId"));
    //     int? userId = HttpContext.Session.GetInt32("UserId");

    //     if (userId == null)
    //     {
    //         return RedirectToAction("LogingReg", "Users");
    //     }

    //     ViewBag.User = _context
    //     .Users
    //     .Find(userId);

    //     // need movie data for view
    //     ViewBag.AllHobby = _context
    //         .Hobbies
    //         //We nee to include thge related model in order to access it in the view
    //         .Include(hobby => hobby.PostedBy)
    //         .ToList();

    //     return View();
    // }




    // [HttpGet("hobbies/new")] // this is the actual route in the address bar(action w/o asp-action points to this.)
    // public IActionResult CreateAHobby()
    // {

    //     var userId = HttpContext.Session .GetInt32("UserId");
    //     if (userId == null)
    //     {
    //         return RedirectToAction("LoginReg", "User");
    //     }

    //     ViewBag.User = _context
    //     .Users
    //     .Find(userId);
    //     return View();




    // }  
    // [HttpPost("hobbies")]
    // public IActionResult CreateAHobby(Hobby hobbyToCreate)
    // {
    //     int? userId = HttpContext.Session.GetInt32("UserId");

    //     if (userId == null)
    //     {
    //         return RedirectToAction("LogingReg", "Users");
    //     }

    //     ViewBag.User = _context
    //     .Users
    //     .Find(userId);


        

    //     if(!ModelState.IsValid)
    //     {
    //         return View("NewHobby");
    //     }
    
    // hobbyToCreate.UserId = HttpContext.Session.GetInt32("UserId").GetValueOrDefault();

    // _context.Add(hobbyToCreate);
    // _context.SaveChanges();
    // return RedirectToAction("Dashboard");
    // }
    // [HttpGet("hobby/{id}")]
    // public IActionResult hobbyPage(int id)
    // {
    //     //retrieve the mobie first!
    //     ViewBag.Hobby = _context
    //         .Hobbies
    //         .Include(hobby => hobby.PostedBy)
    //         .FirstOrDefault(hobby => hobby.HobbyId == id);

    //         ViewBag.User = _context
    //             .Users
    //             .Find(HttpContext.Session.GetInt32("UserId"));

    //     return View("HobbyPage");
    // }
}