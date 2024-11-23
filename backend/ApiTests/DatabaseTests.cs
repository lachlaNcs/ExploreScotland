using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using api.Data;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace ApiTests
{
    public class DatabaseTests
    {
        [Fact]
        public void TestDatabaseConnection()
        {
            bool successfulConnection = false;

            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseMySql("Server=localhost;Database=cityquiz;User=root;Password=;",
                            new MySqlServerVersion(new Version(8, 0, 21)),
                            opts => opts.EnableRetryOnFailure(
                                maxRetryCount: 3,
                                maxRetryDelay: TimeSpan.FromSeconds(5),
                                errorNumbersToAdd: null
                                ))
                .Options;

            try
            {
                using (var context = new ApplicationDbContext(options))
                {
                    Console.WriteLine("Attempted to connect to database...");
                    context.Database.OpenConnection();
                    context.Database.CloseConnection();
                    Console.WriteLine("Connection was successful!");
                    successfulConnection = true;
                }
            }
            catch (Exception ex)
            {
                Assert.Fail($"Failed to connect to the database. Error: {ex.Message}");
            }

            Assert.True(successfulConnection);
        }
    }
}