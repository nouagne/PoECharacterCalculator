using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PoECharacterCalculator.Core.BO
{
    public class Character 
    {
        #region Variables

        public Class Class;

        public int Level { get; set; }

        [DisplayName("STR")]
        public int Strengh { get; set; }
        [DisplayName("DEX")]
        public int Dexterity { get; set; }
        [DisplayName("INT")]
        public int Intelligence { get; set; }

        public int Life { get; set; }
        public int Mana { get; set; }
        public int Evasion { get; set; }
        public int ChanceToEvade { get; set; }
        public int Accuracy { get; set; }
        public int Armor { get; set; }
        public int PhysDmgReduction { get; set; }

        #endregion

        #region Constructeur

        public Character()
        {
            Level = 1;
            Life = 50;
            Mana = 40;
        }
        #endregion

    }
}
