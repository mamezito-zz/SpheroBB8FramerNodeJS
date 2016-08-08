var sphero = require("sphero"),
    bb8 = sphero("0e3a0777cf0d4abdb0f29af311d528d0");

var firebase = require("firebase");
firebase.initializeApp({
    serviceAccount: "key.json",
    databaseURL: "https://sphero-d446f.firebaseio.com"
});

var rotation = 0;
var color = "#ff0000"
var speed=0;
var db = firebase.database();
var ref = db.ref("sphero");
bb8.connect(function() {
console.log("connected")
  ref.on("value", function(snapshot) {
    color=snapshot.val().color;
    speed=snapshot.val().speed;
    rotation=snapshot.val().rotation;
    console.log(color, speed, rotation);
      bb8.color(color);
      bb8.roll(speed, rotation);

  }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
  });



});
