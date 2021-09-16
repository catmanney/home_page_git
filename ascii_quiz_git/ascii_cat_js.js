function defaultCat(){
    document.getElementById("cat1").innerHTML = "                  ";
    document.getElementById("cat2").innerHTML = "                  ";
    document.getElementById("cat3").innerHTML = "      |\\ - /|     ";
    document.getElementById("cat4").innerHTML = "      | · · |     ";
    document.getElementById("cat5").innerHTML = "       (='=)      ";
    document.getElementById("cat6").innerHTML = "      /|   |\\     ";
    document.getElementById("cat7").innerHTML = "     / /   \\ \\    ";
    document.getElementById("cat8").innerHTML = '      (") (")     ';
    document.getElementById("cat9").innerHTML = "                  ";
    document.getElementById("cat0").innerHTML = "                  ";
  }
  
  function catWink(){
    defaultCat();
    setTimeout(function(){
      document.getElementById("cat4").innerHTML = "      | ^ ^ |     "
    },1000);
    setTimeout(function(){
      document.getElementById("cat4").innerHTML = "      | · · |     "
    },2000);
  }
  
  function catBored(){
    defaultCat();
    setTimeout(function(){
      document.getElementById("cat4").innerHTML = "      | - - |     "
    },1000);
    setTimeout(function(){
      document.getElementById("cat4").innerHTML = "      | · · |     "
    },2000);
  }
  
  function catWin(){
    defaultCat();
    setTimeout(function(){
      document.getElementById("cat8").innerHTML='      (") (")     |   '
    },1000);
    setTimeout(function(){
      document.getElementById("cat4").innerHTML='      | > < |      '
    }, 2000);
    setTimeout(function(){
      document.getElementById("cat7").innerHTML='     / /   \\ \\    |   '
    }, 2000);
    setTimeout(function(){
      document.getElementById("cat3").innerHTML='      |\\-*-/|      '
    },3000);
    setTimeout(function(){
      document.getElementById("cat6").innerHTML="      /|   |\\     o  "
    },3000);
    setTimeout(function(){
      document.getElementById("cat8").innerHTML='      (") (")    \\|/   '
    },3000);
    setTimeout(function(){
      document.getElementById("cat0").innerHTML=" Your skills are in full bloom! "
    },3000)
    setTimeout(function(){
      document.getElementById("cat6").innerHTML="      /|   |\\    {o}  "
    },4000);
    setTimeout(function(){
      document.getElementById("cat4").innerHTML="      | · · |      "
    },5000);
  }
  
  function catTap(){
    defaultCat();
    document.getElementById("cat4").innerHTML = "      | ~ ~ |      ";
    document.getElementById("cat0").innerHTML=" Aww! This feline seems to enjoy attention.";
  }
  
  function catByeWave(){
    defaultCat();
    setTimeout(function(){
      document.getElementById("cat4").innerHTML = "      |.- -.|      "
    },1000);
    setTimeout(function(){
      document.getElementById("cat6").innerHTML = "      /|   |\\__   "
    },1000);
    setTimeout(function(){
      document.getElementById("cat7").innerHTML = "     / /   \\      "
    },1000);
    setTimeout(function(){
      document.getElementById("cat6").innerHTML = "      /|   |\\/    "
    },2000);
    setTimeout(function(){
      document.getElementById("cat7").innerHTML = "     / /   \\      "
    },2000);
    setTimeout(function(){
      document.getElementById("cat6").innerHTML = "      /|   \\      "
    },3000);
    setTimeout(function(){
      document.getElementById("cat7").innerHTML = "     / /   \\ \\     "
    },3000);
    setTimeout(defaultCat,3000);
  }