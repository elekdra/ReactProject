using System.Collections.Generic;
using System.Linq;
using System;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using backend.Models;

using Newtonsoft.Json;
using System.Security.Principal;
using System.Text;
using Microsoft.AspNetCore.Hosting;

namespace backend.Controllers
{
 [ApiController]
 [Route("api/[controller]")]


 public class TaskController : ControllerBase
 {
  IWebHostEnvironment environment;
  public TaskController(IWebHostEnvironment environment)
  {
   this.environment = environment;
  }
  [HttpPut]
  [Route("filesave")]
  public IActionResult PutFileNames([FromBody] FileModel model)
  {
   string webRootPath = environment.WebRootPath;
   string filesPath = Path.Combine(webRootPath, "files");
   string fileNamesave = model.FileName;
   string path = filesPath + "\\" + fileNamesave;
   Console.WriteLine(model.Company);
   Console.WriteLine(model.Version);
   Console.WriteLine(model.Training);
   Console.WriteLine(model.FileName);
   Console.WriteLine(path);
   //Console.WriteLine(model.FileContent);
   String[] cnts=model.FileContent.Split("base64,");
   Console.WriteLine(cnts[0]);
    // string decodedString = Encoding.UTF8.GetString(model.FileContent);
    byte[] data = Convert.FromBase64String(cnts[1]);
    Console.WriteLine("Length: "+data.Length);
//string decodedString = Encoding.UTF8.GetString(data);
//Console.WriteLine(decodedString);
using (System.IO.FileStream stream = System.IO.File.Create(path))
{
   //System.Byte[] byteArray = System.Convert.FromBase64String(decodedString);
    stream.Write(data, 0, data.Length);
}
    // var data = new List<byte>();
    // using (var sr = new StreamReader(model.FileContent))
    // {
    //     string line;
    //     while((line = sr.ReadLine()) != null)
    //         data.Add(Byte.Parse(line));
    // }
    // using (var sw = new StreamWriter(path))
    // {
    //     sw.Write(Encoding.UTF8.GetString(data.ToArray()));
    // }
    // Console.WriteLine(Encoding.UTF8.GetString(data.ToArray()));

 

//    using (FileStream fs = System.IO.File.Create(path))
//    {
    
//     Byte[] content = new System.Text.UTF8Encoding(true).GetBytes(model.FileContent);
//     fs.Write(content, 0, content.Length);
//    }
//    using (StreamReader sr = System.IO.File.OpenText(path))
//    {
//     string s = "";
//     while ((s = sr.ReadLine()) != null)
//     {
//      Console.WriteLine(s);
//     }
//    }
   return Ok();

  }



  [HttpGet]
  [Route("getdefaults")]


  public object GetDefaults(string initialize)
  {

   string json = @"\assignments\test\fathima-main\backend\Controllers\data.json";
   var jsonString = System.IO.File.ReadAllText(json);
   Console.WriteLine(jsonString);
   object jsonObject = JsonConvert.DeserializeObject(jsonString);
   Console.WriteLine("---------------------------");
   //    Console.WriteLine(jsonObject);
   //    return jsonObject;
   return jsonString;

  }


 }
}