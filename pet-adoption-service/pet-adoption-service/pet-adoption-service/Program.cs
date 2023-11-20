using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using pet_adoption_service.Models;
using pet_adoption_service.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Add the service registration in your Program.cs
builder.Services.AddScoped<IPetService, PetService>();


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Access the Configuration object through the HostingEnvironment
var configuration = builder.Configuration;

// Register DbContext here
builder.Services.AddDbContext<PetAdoptionDbContext>(options =>
    options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
