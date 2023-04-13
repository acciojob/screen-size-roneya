function showDimensions() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        document.getElementById("dimensions").innerHTML = "Width: " + width + "px and Height: " + height + "px";
      }
      window.onload = showDimensions; // Show dimensions on page load
      window.onresize = showDimensions;
