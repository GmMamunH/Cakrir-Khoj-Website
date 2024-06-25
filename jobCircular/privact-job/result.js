    // Check if the flag is set to show the elements
    if (localStorage.getItem("showElements") === "true") {
        document.getElementById("element1").style.display = "block";
        document.getElementById("element2").style.display = "none";
        document.getElementById("element3").style.display = "none";
        document.getElementById("element4").style.display = "none";
        localStorage.removeItem("showElements"); // Remove the flag after displaying the elements
      } else if (localStorage.getItem("showElements2") === "true") {
        document.getElementById("element1").style.display = "none";
        document.getElementById("element2").style.display = "block";
        document.getElementById("element3").style.display = "none";
        document.getElementById("element4").style.display = "none";
        localStorage.removeItem("showElements2"); // Remove the flag after displaying the elements
      } else if (localStorage.getItem("showElements3") === "true") {
        document.getElementById("element1").style.display = "none";
        document.getElementById("element2").style.display = "none";
        document.getElementById("element3").style.display = "block";
        document.getElementById("element4").style.display = "none";
        localStorage.removeItem("showElements3"); // Remove the flag after displaying the elements
      } else if (localStorage.getItem("showElements4") === "true") {
        document.getElementById("element1").style.display = "none";
        document.getElementById("element2").style.display = "none";
        document.getElementById("element3").style.display = "none";
        document.getElementById("element4").style.display = "block";
        localStorage.removeItem("showElements4"); // Remove the flag after displaying the elements
      }