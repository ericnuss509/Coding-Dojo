using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using login.Models;
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
        ViewBag.AllMovies = _context
            .Movies
            //We nee to include thge related model in order to access it in the view
            .Include(movie => movie.PostedBy)
            .Include(movie => movie.Likes)
            .OrderByDescending(movie => movie.Likes.Count)
            .ToList();

        return View();
    }
    [HttpGet("movies/new")] // this is the actual route in the address bar(action w/o asp-action points to this.)
    public IActionResult NewMoviePage()
    {

        var userId = HttpContext.Session .GetInt32("UserId");
        if (userId == null)
        {
            return RedirectToAction("LoginReg", "User");
        }

        ViewBag.User = _context
        .Users
        .Find(userId);
        return View();

    } // the action name cn be use with asp-action
    [HttpPost("movies")]

    public IActionResult CreateMovie(Movie movieToCreate)
    {
        if (movieToCreate.ReleaseDate.Date >= DateTime.Now.Date)
        {
            ModelState.AddModelError("ReleaseDate", "You must specify a date in the past.");
        }
        if (!ModelState.IsValid)
        {
            return View("NewMoviePage");
        }

        //this wouldn't work if user isn't logged in
        movieToCreate.UserId = HttpContext.Session.GetInt32("UserId").GetValueOrDefault();
        _context.Add(movieToCreate);
        _context.SaveChanges();
        
        // need movie ID
        return RedirectToAction("Dashboard");
    }
    [HttpGet("movie/{id}")]
    public IActionResult MoviePage(int id)
    {
        //retrieve the mobie first!
        ViewBag.Movie = _context
            .Movies
            .Include(movie => movie.PostedBy)
            //populate the likes first
            .Include(movie => movie.Likes)
            // and then populate the users.
                .ThenInclude(like => like.UserWhoLikes)
            .FirstOrDefault(movie => movie.MovieId == id);

            ViewBag.User = _context
                .Users
                .Find(HttpContext.Session.GetInt32("UserId"));

        return View("MoviePage");
    }
    [HttpPost("movies/{id}/Likes")]
    public IActionResult AddLikeToMovie(int id)
    {
        var likeToAdd = new Like();
        likeToAdd.UserId = HttpContext.Session.GetInt32("UserId").GetValueOrDefault();
        likeToAdd.MovieId = id;
        
        _context.Add(likeToAdd);
        _context.SaveChanges();

        return RedirectToAction("Dashboard");
    }
    [HttpPost("movies/Likes/delete")]
    public IActionResult RemoveLikeFromMovie(int MovieId)
    {

        var userId = HttpContext.Session.GetInt32("UserId");
        var likeToRemove = _context
            .Likes
            .FirstOrDefault(like => like.MovieId == MovieId && like.UserId == userId);
        // likeToAdd.UserId = HttpContext.Session.GetInt32("UserId").GetValueOrDefault();
        // likeToAdd.MovieId = id;
        
        _context.Likes.Remove(likeToRemove);
        _context.SaveChanges();

        return RedirectToAction("Dashboard");
    }
    [HttpPost("movies/{id}/delete")]
    public IActionResult DeleteMovie(int id)
    {
        var movieToDelete = _context
            .Movies
            .Find(id);
            
            _context.Movies.Remove(movieToDelete);
            _context.SaveChanges();
            return RedirectToAction("Dashboard"); 
        
    }
}