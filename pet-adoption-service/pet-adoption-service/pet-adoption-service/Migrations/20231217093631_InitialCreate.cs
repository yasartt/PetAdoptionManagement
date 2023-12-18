using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace pet_adoption_service.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pet",
                columns: table => new
                {
                    pet_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    breed = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    age = table.Column<int>(type: "int", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    shelter_id = table.Column<int>(type: "int", nullable: true),
                    IsAvailable = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pet", x => x.pet_id);
                });

            migrationBuilder.CreateTable(
                name: "petAdopter",
                columns: table => new
                {
                    userId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    age = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_petAdopter", x => x.userId);
                });

            migrationBuilder.CreateTable(
                name: "shelter",
                columns: table => new
                {
                    userId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BusyHours = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RestrictedHours = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_shelter", x => x.userId);
                });

            migrationBuilder.CreateTable(
                name: "ShelterAppointments",
                columns: table => new
                {
                    AppointmentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ShelterId = table.Column<int>(type: "int", nullable: false),
                    PetId = table.Column<int>(type: "int", nullable: false),
                    AppointmentDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShelterAppointments", x => x.AppointmentId);
                });

            migrationBuilder.CreateTable(
                name: "VetAppointments",
                columns: table => new
                {
                    AppointmentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VetId = table.Column<int>(type: "int", nullable: false),
                    PetId = table.Column<int>(type: "int", nullable: false),
                    AppointmentDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VetAppointments", x => x.AppointmentId);
                });

            migrationBuilder.CreateTable(
                name: "veterinarian",
                columns: table => new
                {
                    userId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    specialization = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RestrictedHours = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_veterinarian", x => x.userId);
                });

            migrationBuilder.CreateTable(
                name: "AdoptionApplication",
                columns: table => new
                {
                    adoption_application_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    pet_adopter_id = table.Column<int>(type: "int", nullable: false),
                    shelter_id = table.Column<int>(type: "int", nullable: false),
                    pet_id = table.Column<int>(type: "int", nullable: false),
                    application_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdoptionApplication", x => x.adoption_application_id);
                    table.ForeignKey(
                        name: "FK_AdoptionApplication_Pet_pet_id",
                        column: x => x.pet_id,
                        principalTable: "Pet",
                        principalColumn: "pet_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AdoptionApplication_petAdopter_pet_adopter_id",
                        column: x => x.pet_adopter_id,
                        principalTable: "petAdopter",
                        principalColumn: "userId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AdoptionApplication_shelter_shelter_id",
                        column: x => x.shelter_id,
                        principalTable: "shelter",
                        principalColumn: "userId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AdoptionApplication_pet_adopter_id",
                table: "AdoptionApplication",
                column: "pet_adopter_id");

            migrationBuilder.CreateIndex(
                name: "IX_AdoptionApplication_pet_id",
                table: "AdoptionApplication",
                column: "pet_id");

            migrationBuilder.CreateIndex(
                name: "IX_AdoptionApplication_shelter_id",
                table: "AdoptionApplication",
                column: "shelter_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AdoptionApplication");

            migrationBuilder.DropTable(
                name: "ShelterAppointments");

            migrationBuilder.DropTable(
                name: "VetAppointments");

            migrationBuilder.DropTable(
                name: "veterinarian");

            migrationBuilder.DropTable(
                name: "Pet");

            migrationBuilder.DropTable(
                name: "petAdopter");

            migrationBuilder.DropTable(
                name: "shelter");
        }
    }
}
