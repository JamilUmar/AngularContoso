using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AngularContosoUniversity.Data;
using ContosoUniversity.Data;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;


namespace AngularContosoUniversity
{
  public class Program
  {
    public static void Main(string[] args)
    {
      // CreateWebHostBuilder(args).Build().Run();
      var host = BuildWebHost(args);
      using(var scope = host.Services.CreateScope())
      {
        var services = scope.ServiceProvider;
        try{
          var db = services.GetRequiredService<AngularContosoContext>();
          DbInitializer.Initialize(db);
        }catch (Exception ex){
          var logger = services.GetRequiredService<ILogger<Program>>();
          logger.LogError(ex, "Error while seeding the Database");
        }
      }
      host.Run();
    }

    public static IWebHost BuildWebHost(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
            .UseStartup<Startup>()
            .Build();
  }
}
