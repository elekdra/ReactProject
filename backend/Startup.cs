using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;


namespace backend
{
 public class Startup
 {
  public Startup(IConfiguration configuration)
  {
   Configuration = configuration;

  }

  public IConfiguration Configuration { get; }

  // This method gets called by the runtime. Use this method to add services to the container.
  public void ConfigureServices(IServiceCollection services)
  {

   services.AddControllers();
   //  services.AddSingleton<ITaskServices, TaskServices>();
   services.AddCors(options =>
  {
   options.AddPolicy("CorsPolicy",
             builder => builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
  });
   // services.AddSwaggerGen(c =>
   // {
   //     c.SwaggerDoc("v1", new OpenApiInfo { Title = "backend", Version = "v1" });
   // });
  }

  // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
  public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
  {
   if (env.IsDevelopment())
   {
    app.UseDeveloperExceptionPage();
    // app.UseSwagger();
    //app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "backend v1"));
   }

   app.UseCors(
     /*options => options.WithOrigins("http://localhost:4200/").AllowAnyMethod().AllowAnyHeader()*/
     "CorsPolicy"
    );

   app.UseHttpsRedirection();

   app.UseRouting();

   app.UseAuthorization();

   app.UseEndpoints(endpoints =>
   {
    endpoints.MapControllers();
   });
  }
 }
}
