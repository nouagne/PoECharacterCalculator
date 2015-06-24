using PoeCalculator.Web.ViewModels;
using PoECharacterCalculator.Core.BLL;
using PoECharacterCalculator.Core.BO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PoeCalculator.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult SelectClass(FormCollection form)
        {
            CharacterViewModel model = new CharacterViewModel();
            model.CharacterClass = (Class)int.Parse(form["CharacterClass"]);
            model.Character = (Character)CharacterManager.getCharacter(model.CharacterClass.ToString());
            return View("Index",model);
        }
    }
}