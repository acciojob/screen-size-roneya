function showDimensions() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        document.getElementById("sizeInfo").innerHTML = "Width: " + width + " and Height: " + height;
      }
      window.onload = showDimensions; 
      window.onresize = showDimensions;
