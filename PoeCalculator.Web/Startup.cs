using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PoeCalculator.Web.Startup))]
namespace PoeCalculator.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
