using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using crud.Models;
using Microsoft.EntityFrameworkCore;

// Other using statements
namespace crud.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;

        // here we can "inject" our context service into the constructor
        public HomeController(MyContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            List<Dish> Dishes = _context.Dishes.ToList();
            ViewBag.dishes = Dishes;
            
            return View();
        }





        [HttpGet("NewDish")]
        public IActionResult NewDish()
        {
            return View();
            
        }




        [HttpPost("dishes")]
        public IActionResult Create(Dish newDish)
        {
            if(!ModelState.IsValid)
            {
                return View("NewDish");
            }
            _context.Add(newDish);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }





        [HttpGet("details/{dishid}")]
        public IActionResult Details(int dishid)
        {
            Dish dish = _context.Dishes.Find(dishid);
            return View(dish);
        }




        [HttpGet("edit/{dishid}")]       
        public IActionResult Edit(int dishid)
        {
            Dish DishToEdit = _context.Dishes.Find(dishid);
            return View("Edit", DishToEdit);
        }
        



        [HttpPost("EditDish/{dishid}")]
        public IActionResult EditDish(Dish updateddish, int dishid)
        {
            var dishToUpdate = _context.Dishes.FirstOrDefault(d => d.DishId == dishid);
            if (!ModelState.IsValid)
            {
                return View("Edit", dishToUpdate);
            }
            
            
            dishToUpdate.Name = updateddish.Name;
            dishToUpdate.Chef = updateddish.Chef;
            dishToUpdate.Calories = updateddish.Calories;
            dishToUpdate.Tastiness = updateddish.Tastiness;
            dishToUpdate.Description= updateddish.Description;
            dishToUpdate.UpdatedAt = updateddish.UpdatedAt;
            _context.SaveChanges();
            return RedirectToAction("Details", new {dishid = dishid});
        }

        


        [HttpPost("delete/{dishid}")]
        public IActionResult DeleteDish(int dishid)
        {
            var dishToDelete = _context.Dishes.Find(dishid);
            _context.Dishes.Remove(dishToDelete);
            _context.SaveChanges();
            return RedirectToAction("index");
        }
    }
}


