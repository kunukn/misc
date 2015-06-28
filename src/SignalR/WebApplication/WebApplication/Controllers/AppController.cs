using System.Web.Mvc;

namespace WebApplication.Controllers
{
    public class AppController : Controller
    {
        public ActionResult Index()
        {
            return File("chat.html", "text/html");           
        }

        public ActionResult Chat()
        {
            return File("chat.html", "text/html");
        }

        public ActionResult App()
        {
            return File("app.html", "text/html");
        }
    }
}