
  window.addEventListener("scroll", fade );
  window.addEventListener("load", fade );

  function fade() {
    var reveals = document.querySelectorAll(".fade");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].style.setProperty(
            "opacity",
            `1`
        );
      } else {
        reveals[i].style.setProperty(
            "opacity",
            `0`
        );
      }
    }
  }