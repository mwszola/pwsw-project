using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [Route("r")]
    [ApiController]
    public class RedirectController : ControllerBase
    {
        private readonly LinkContext _context;

        public RedirectController(LinkContext context)
        {
            _context = context;
        }

        // GET: r/kadabra
        [HttpGet("{alias}")]
        public async Task<ActionResult<string>> GetLink(string alias)
        {
            var link = _context.Links.Where(e => e.UrlAlias == alias).Select(e => e.OriginalUrl).SingleOrDefault();

            if (link == null)
            {
                return NotFound();
            }

            return await Task.FromResult(link);
        }
    }
}