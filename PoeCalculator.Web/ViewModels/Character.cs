using PoECharacterCalculator.Core.BO;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace PoeCalculator.Web.ViewModels
{
    public class CharacterViewModel
    {
        [Display(Name = "Character class")]
        public Class CharacterClass { get; set; }

        [Display(Name = "Character")]
        public Character Character { get; set; }
    }
}
