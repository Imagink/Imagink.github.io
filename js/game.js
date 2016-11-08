$(document).ready(function() {

  $("#next").click(function() {
    //$("#text2").show();  <--saving for later in case
    $("#text").html("There once was a race of intelligent beings. Their world was running out of supplies so four of their top scientists sent out thousands and thousands of pods into the universe, filled with robots and cyborgs with the mission to scavenge the world.");
    $(".picture").css("background","url('http://img14.deviantart.net/bd2b/i/2016/267/6/3/box_4_by_peachyfiesta-dair9c4.png')");
    $("#next").hide();
    $("#next2").show();
  });

  $("#next2").click(function() {
    $("#text").html("One pod got knocked off course, and sent crashing into a planet, cutting the top half clean off.");
    $(".picture").css("background","url('http://img03.deviantart.net/2ab3/i/2015/304/2/3/selfie___digital__by_peachyfiesta-d9ezdca.png')");
    $("#next2").hide();
    $("#next3").show();
  });

  $("#next3").click(function() {
    $("#text").html("The pod cracked, and in a sudden burst of free will, the robots and cyborgs scattered out, minds broke free of their previous mission and replaced with the will to survive.");
    $(".picture").css("background","url('http://img09.deviantart.net/4a24/i/2016/267/2/a/box_1_by_peachyfiesta-dair8nb.png')");
    $("#next3").hide();
    $("#next4").show();
  });

  $("#next4").click(function() {
    $("#text").html("Eventually they got used to thinking for themselves and many years later a new civilization was built.");
    $(".picture").css("background","url('http://pre07.deviantart.net/5e28/th/pre/i/2016/311/0/e/alchemy_accident_by_peachyfiesta-dankzet.png')");
    $("#next4").hide();
    $("#next5").show();
  });

  $("#next5").click(function() {
    $("#text").html("One day, a female cyborg scientist made a grave mistake, dooming her entire civilization to the cause of a potion mishap. And as night hit, the entire population disappeared from the face of the world.");
    $(".picture").css("background","url('http://img14.deviantart.net/bd2b/i/2016/267/6/3/box_4_by_peachyfiesta-dair9c4.png')");
    $("#next5").hide();
    $("#next6").show();
  });

  $("#next6").click(function() {
    $("#text").html("Decades later, the remains of the old civilization was recreated from the ground up. New species, new rules and new physics, all not knowing of their past history.");
    $(".picture").css("background","url('http://pre07.deviantart.net/5e28/th/pre/i/2016/311/0/e/alchemy_accident_by_peachyfiesta-dankzet.png')");
    $("#next6").hide();
    $("#next7").show();
  });

  $("#next7").click(function() {
    $("#text").html("Now, we join four simple villagers. In their journey, to the Underneath.");
    $(".picture").css("background","url('http://img14.deviantart.net/bd2b/i/2016/267/6/3/box_4_by_peachyfiesta-dair9c4.png')");
    $("#next7").hide();
  });

});