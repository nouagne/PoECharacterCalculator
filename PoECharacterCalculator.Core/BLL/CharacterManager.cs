using PoECharacterCalculator.Core.BO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace PoECharacterCalculator.Core.BLL
{
    public static class CharacterManager
    {
        public static object getCharacter(string characterClass)
        {
            var assembly = Assembly.GetExecutingAssembly();

            var type = assembly.GetTypes()
                .First(t => t.Name == characterClass);

            return Activator.CreateInstance(type);
        }
    }
}
