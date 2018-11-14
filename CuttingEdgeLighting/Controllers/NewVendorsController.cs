using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using CuttingEdgeLighting.Models;

namespace CuttingEdgeLighting.Controllers
{
    public class NewVendorsController : Controller
    {
        private NewVendorContext db = new NewVendorContext();

        // GET: NewVendors
        public ActionResult Questionnaire()
        {
            return View(db.NewVendors.ToList());
        }

      
    }
}
