using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        public DataContext _context { get; }
        public UsersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers ()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<AppUser>> GetUsers (int id)
        {
            var user = await _context.Users.FindAsync(id);
            return user;
        }
    }
}