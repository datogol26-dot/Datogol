document.addEventListener("DOMContentLoaded", function() {

  const match = {
    home: {
      name: "Manchester City"
    },
    away: {
      name: "Arsenal"
    }
  };

  document.getElementById("home-name").textContent = match.home.name;
  document.getElementById("away-name").textContent = match.away.name;

});
