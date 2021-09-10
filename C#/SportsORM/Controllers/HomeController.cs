using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;
using Microsoft.EntityFrameworkCore;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            ViewBag.WomensLeagues = _context.Leagues.Where(l => l.Name.Contains("Women")).ToList();
            ViewBag.Hockey = _context.Leagues.Where(l => l.Sport.Contains ("Hockey")).ToList();
            ViewBag.Football = _context.Leagues.Where(l => !l.Name.Contains ("Football")).ToList();
            ViewBag.Conferences = _context.Leagues.Where(l => l.Name.Contains ("Conference")).ToList();
            ViewBag.Atlantic = _context.Leagues.Where(l => l.Name.Contains ("Atlantic")).ToList();
            ViewBag.Dallas = _context.Teams.Where(l => l.Location.Contains ("Dallas")).ToList();
            ViewBag.Raptors = _context.Teams.Where(l => l.TeamName.Contains ("Raptors")).ToList();
            ViewBag.City = _context.Teams.Where(l => l.Location.Contains ("City")).ToList();
            ViewBag.T = _context.Teams.Where(l => l.TeamName.StartsWith("T")).ToList();
            ViewBag.Location =_context.Teams.OrderBy(l =>l.Location).ToList();
            ViewBag.Decend = _context.Teams.OrderByDescending(l => l.TeamName).ToList();
            ViewBag.Cooper = _context.Players.Where(l => l.LastName.Contains("Cooper")).ToList();
            ViewBag.Josh = _context.Players.Where(l => l.FirstName.Contains("Joshua")).ToList();
            ViewBag.NotJosh = _context.Players.Where(l => l.LastName.Contains("Cooper") && !l.FirstName.Contains("Joshua")).ToList();
            ViewBag.Or = _context.Players.Where(l => l.FirstName.Contains("Alexander") || l.FirstName.Contains("Wyatt")).ToList();
            
            return View();
        }

        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            ViewBag.ASC = _context.Teams.Include(l => l.CurrLeague).Where(t =>t.CurrLeague.Name.Contains("Atlantic Soccer Conference"));
            
        //     //    <li>...all (current) players on the Boston Penguins (Hint: Boston is the Location, Penguins is the TeamName)</li>
        //     ViewBag.Bostonplayer = _context.Players.Include(l => l.CurrentTeam).Where(t => t.CurrentTeam.TeamName.Contains("Penguins"));
        //     // <li>...all (current) players in the International Collegiate Baseball Conference</li>
        //     ViewBag.Collebaseball = _context.Players.Include(l => l.CurrentTeam.CurrLeague).Where(t => t.CurrentTeam.CurrLeague.Name.Contains("International Collegiate Baseball Conference")); 
        //     // <li>...all (current) players in the American Conference of Amateur Football with last name "Lopez"</li>
        //     // ViewBag.Amateur = _context.Players.Include(l => l.CurrentTeam).Where(t => Player.LastName.Contains ("Lopez") && t.CurrentTeam.CurrLeague.Name.Contains(" American Conference of Amateur Football"));
            // <li>...all football players</li>
            ViewBag.Football = _context.Players.Include(l => l.CurrentTeam.CurrLeague).Where(t => t.CurrentTeam.CurrLeague.Sport.Contains("Football"));
            // <li>...all teams with a (current) player named "Sophia"</li>
            // ViewBag.Sophia =_context.Teams.Include(p => p.CurrentPlayers).Where(o => o.CurrentPlayers.Any(l => l.FirstName == "Sophia" || l.LastName =="Sophia"));
            // // <li>...all leagues with a (current) player named "Sophia"</li>
            // ViewBag.SophiesChoice = _context.Leagues.Include(j => j.Teams).ThenInclude(t => t.CurrentPlayers).Where(g => g.Teams.Any(l => l.CurrentPlayers.Any(l => l.FirstName == "Sophia")));
            // // <li>...everyone with the last name "Flores" who DOESN'T (currently) play for the Washington Roughriders</li>
            // ViewBag.Flores = _context.Players.Include(p => p.CurrentTeam);
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}