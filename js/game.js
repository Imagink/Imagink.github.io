$(document).ready(function() {

    var name;
    var gender;

  $("#next").click(function() {
    //$("#text2").show();  <--saving for later in case
    $("#text").html("There once was a race of intelligent beings. Their world was running out of supplies so four of their top scientists sent out thousands of pods into the universe, filled with robots and cyborgs with the mission to scavenge the world.");
    $(".picture").css("background","url('https://imagink.github.io/img/2.png')");
    $("#next").hide();
    $("#next2").show();
  });

  $("#next2").click(function() {
    $("#text").html("One pod got knocked off course");
    $(".picture").css("background","url('https://imagink.github.io/img/3.png')");
    $("#next2").hide();
    $("#next3").show();
  });

  $("#next3").click(function() {
    $("#text").html("And was sent crashing into a planet, cutting the top half clean off.");
    $(".picture").css("background","url('https://imagink.github.io/img/4.png')");
    $("#next3").hide();
    $("#next4").show();
  });


  $("#next4").click(function() {
    $("#text").html("The pod cracked, and in a sudden burst of free will, the robots and cyborgs scattered out, minds broke free of their previous mission and replaced with the will to survive.");
    $(".picture").css("background","url('https://imagink.github.io/img/5.png')");
    $("#next4").hide();
    $("#next5").show();
  });

  $("#next5").click(function() {
    $("#text").html("Eventually, they got used to thinking for themselves and many years later a new civilization was built.");
    $(".picture").css("background","url('https://imagink.github.io/img/6.png')");
    $("#next5").hide();
    $("#next6").show();
  });

  $("#next6").click(function() {
    $("#text").html("But one day, a female cyborg scientist made a grave mistake, dooming her entire civilization to the cause of a potion mishap. And as night hit, the entire population disappeared from the face of the world.");
    $(".picture").css("background","url('https://imagink.github.io/img/7.png')");
    $("#next6").hide();
    $("#next7").show();
  });

  $("#next7").click(function() {
    $("#text").html("Decades later, the remains of the old civilization was recreated from the ground up. New species, new rules and new physics, all not knowing of their past history.");
    $(".picture").css("background","url('https://imagink.github.io/img/8.png')");
    $("#next7").hide();
    $("#next8").show();
  });

  $("#next8").click(function() {
    $("#text").html("Now, we join four simple villagers. In their journey, to the Underneath.");
    $(".picture").css("background","url('https://imagink.github.io/img/9.png')");
    $("#next8").hide();
     $("#next9").show();
  });

   $("#submitname").click(function() {
    //Create a variables for holding our information
    //var name;

    // Set it equal to what's inside the input field with id="name"
    name = document.getElementById("name").value;
    
    // Change the span with id "welcomeName" to the name
    $(".playername").html(name);
  });

   //use <div class="playername"></div> to show player name

  
   $("#genderarrow").click(function() {
        //Create a variables for holding our information
       //var gender;
     
      if ($("input[name='gender']:checked").val()) {
           gender=$("input[name='gender']:checked").val()
          // show user what they selected
          $(".sex").html(gender);
      if (gender=="female") {
          $(".sex").css("color", "#CF74AE")
      }
          $("#genderarrow").hide();
          $("#confirm").show();
          return false;
      }
      else {
        alert('Choose your gender first!');
      }
   });

   $("#placeholder").click(function() {
    $("#placeholdertext").show();
    });    

   $("#placeholdertext").click(function() {
    $("#placeholdertext").hide();
    $("#playerspeech").show();
    });    

   $("#playerspeech").click(function() {
    $("#playerspeech").hide();
    });    

  (function () {
  var count = 0;

  $('#enemy').click(function () {
    count += 1;

    //if (count == 1) {
      //$("#leona").css("background","url('http://orig07.deviantart.net/22cf/f/2016/315/e/0/stab_by_peachyfiesta-dao329i.gif')");
      //$(".leona").css("background-size","110px 285px");
      //$(".leona").css("background-position","50% 50%");
      //$(".leona").css("background-repeat","no-repeat");
      //setTimeout(function(){ $("#leona").css("background","url('https://imagink.github.io/img/front.png')"); }, 3020);
    //}
    if (count == 5) {
      // come code
      $("#enemy").hide();
      $("#deadenemy").show();
      setTimeout(function(){ $("#deadenemy").hide(); }, 3020);
    }
  });
})();

$(document).keydown(function(e) {
    var Speed = 50;
    var Drift = 50;
    switch(e.which) {
      case 37: // left
        $(".leona").css("background","url('https://imagink.github.io/img/spritesheetleft.gif')");
        $(".leona").css("background-size","110px 285px");
        //$(".leona").css("background-position","0px 193px");
        //$(".leona").css("background-repeat","no-repeat");
        $('#leona').animate({
        'marginLeft' : '-='+Speed+"px" //moves right
        }, 'fast', 'linear');
      break;

      case 38: // up
        $(".leona").css("background","url('https://imagink.github.io/img/spritesheetback.gif')");
        $(".leona").css("background-size","110px 285px");
        //$(".leona").css("background-position","0px 193px");
        //$(".leona").css("background-repeat","no-repeat");
        $('#leona').animate({
        'marginTop' : '-='+Drift+"px"
        }, 'fast', 'linear'); 
      break;

        case 39: // right
        $(".leona").css("background", "url('https://imagink.github.io/img/spritesheetside.gif')");
        $(".leona").css("background-size","110px 285px");
        //$(".leona").css("background-position","0px 193px");
        //$(".leona").css("background-repeat","no-repeat");
        $('#leona').animate({
        'marginLeft' : '+='+Speed+"px" //moves right
        }, 'fast', 'linear');
        break;

        case 40: // down
        $(".leona").css("background","url('https://imagink.github.io/img/spritesheetshort.gif')");
        $(".leona").css("background-size","110px 285px");
        //$(".leona").css("background-position","0px 193px");
        //$(".leona").css("background-repeat","no-repeat");
        $('#leona').animate({
        'marginTop' : '+='+Drift+"px"
        }, 'fast', 'linear');
        break;

        default: return; // exit this handler for other keys
        $('#leona').stop()
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

$(document).keyup(function(e) {
    var Speed = 50;
    var Drift = 50;
    switch(e.which) {
      case 37: // left
        $(".leona").css("background","url('https://imagink.github.io/img/left.png')");
        $(".leona").css("background-size","110px 285px");
        //$(".leona").css("background-position","0px 193px");
        //$(".leona").css("background-repeat","no-repeat");
        $('#leona').animate({
        'marginLeft' : '-='+Speed+"px" //moves right
        }, 'fast', 'linear');
      break;

      case 38: // up
        $(".leona").css("background","url('https://imagink.github.io/img/back.png')");
        $(".leona").css("background-size","110px 285px");
        //$(".leona").css("background-position","0px 193px");
        //$(".leona").css("background-repeat","no-repeat");
        $('#leona').animate({
        'marginTop' : '-='+Drift+"px"
        }, 'fast', 'linear'); 
      break;

        case 39: // right
        $(".leona").css("background", "url('https://imagink.github.io/img/right.png')");
        $(".leona").css("background-size","110px 285px");
        //$(".leona").css("background-position","0px 193px");
        //$(".leona").css("background-repeat","no-repeat");
        $('#leona').animate({
        'marginLeft' : '+='+Speed+"px" //moves right
        }, 'fast', 'linear');
        break;

        case 40: // down
        $(".leona").css("background","url('https://imagink.github.io/img/front.png')");
        $(".leona").css("background-size","110px 285px");
        //$(".leona").css("background-position","0px 193px");
        //$(".leona").css("background-repeat","no-repeat");
        $('#leona').animate({
        'marginTop' : '+='+Drift+"px"
        }, 'fast', 'linear');
        break;

        default: return; // exit this handler for other keys
        $('#leona').stop()
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

 //setTimeout(function(){ $("#leona").css("background","url('https://imagink.github.io/img/front.png')"); }, 1000)

     //function collision($div1, $div2) {
      //var x1 = $div1.offset().left;
      //var y1 = $div1.offset().top;
      //var h1 = $div1.outerHeight(true);
      //var w1 = $div1.outerWidth(true);
      //var b1 = y1 + h1;
     // var r1 = x1 + w1;
      //var x2 = $div2.offset().left;
      //var y2 = $div2.offset().top;
      //var h2 = $div2.outerHeight(true);
      //var w2 = $div2.outerWidth(true);
      //var b2 = y2 + h2;
      //var r2 = x2 + w2;
        
      //if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        //if it is not colliding, make div2 background green
        //$("#book").css('background','green');
        //return false;
      //} 
      //else {  
        //if it is colliding, make div2 background yellow
        //$("#book").css('background','yellow');
        //return true;
      //}
    //}

//window.setInterval(function() {
   // $('#result').text(collision($('#leona'), $('#book')));
//}, 200);

//function randomIntFromInterval(min,max)
//{
    //return Math.floor(Math.random()*(max-min+1)+min);
//}

});