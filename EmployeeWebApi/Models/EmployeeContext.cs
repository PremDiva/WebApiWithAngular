using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EmployeeWebApi.Models
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext():base("name=DBCS")
        {
        }

        public DbSet<Employee> Employees { get; set;}
    }
}