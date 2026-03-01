alert("DatoGol ya esta funcionando");

document.addEventListener("DOMContentLoaded", function() {

  const match = {
    home: {
      name: "Manchester City",
      points: 57
    },
    away: {
      name: "Arsenal",
      points: 60
    },
    stadium:"Etihad Stadium" 
  };

  document.getElementById("home-name").textContent = match.home.name;
  document.getElementById("away-name").textContent = match.away.name;

  document.getElementById("home-points").textContent =
    match.home.points + " pts";

  document.getElementById("away-points").textContent =
    match.away.points + " pts";
  document.getElementById("match-stadium").textContent =
  "ESTADIO TEST";

});
