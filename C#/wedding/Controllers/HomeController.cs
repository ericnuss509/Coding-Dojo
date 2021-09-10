using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using wedding.Models;
using System.Linq; // allows us to use ToList
using Microsoft.EntityFrameworkCore; // allows to Include
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

        if (userId == null)
        {
            return RedirectToAction("LogingReg", "Users");
        }

        ViewBag.User = _context
        .Users
        .Find(userId);

        // need movie data for view
        // ViewBag.AllMovies = _context
        //     .Movies
        //     //We nee to include thge related model in order to access it in the view
        //     .Include(movie => movie.PostedBy)
        //     .Include(movie => movie.Likes)
        //     .OrderByDescending(movie => movie.Likes.Count)
        //     .ToList();

        return View();
    }
    [HttpGet("wedding/new")]
    public IActionResult NewWedding()
    {
        int? userId = HttpContext.Session.GetInt32("UserId");

        if (userId == null)
        {
            return RedirectToAction("LogingReg", "Users");
        }

        ViewBag.User = _context
        .Users
        .Find(userId);

        return View();
    }
    [HttpPost("weddings")]
    public IActionResult CreateWedding(Wedding weddingToCreate)
    {
        int? userId = HttpContext.Session.GetInt32("UserId");

        if (userId == null)
        {
            return RedirectToAction("LogingReg", "Users");
        }

        ViewBag.User = _context
        .Users
        .Find(userId);


        
        if (weddingToCreate.Date <= DateTime.Now.Date)
        {
            ModelState.AddModelError("ReleaseDate", "You must specify a date in the past.");
        }
        if(!ModelState.IsValid)
        {
            return View("NewWedding");
        }
    
    weddingToCreate.CreatorId = HttpContext.Session.GetInt32("UserId").GetValueOrDefault();

    _context.Add(weddingToCreate);
    _context.SaveChanges();
    return RedirectToAction("Dashboard");
    }
}

