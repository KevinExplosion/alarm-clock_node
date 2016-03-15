var Alarm = require('./../js/alarm-clock.js').Alarm;

$(document).ready(function(){
  var newAlarm = new Alarm();
  setInterval(function() {
    $('#time').text(newAlarm.getTime());
  }, 1000);


  $('#alarm').submit(function(event){
    event.preventDefault();
    var hour = parseInt($('#alarmTimeHour').val());
    var minute = parseInt($('#alarmTimeMinute').val());
    var myAlarm = new Alarm(hour, minute);
    $('#alarmtime').append("<h4>Alarm: " + hour + ":" + minute + "</h4>");
    setInterval(function() {
      if (myAlarm.checkAlarm(hour, minute) == true) {
        alert("RING RING RING");

        var txt;
        var snooze = confirm("Press OK to turn alarm off. Press CANCEL for snooze.");
        if (snooze == true) {
            minute = NaN;
            hour = NaN;
        } else {
            minute = minute + 1;
              if (minute >= 60){
                minute = minute - 60;
              }
        }
      }
    }, 2000);
    myAlarm.checkAlarm(hour, minute);
  });
});
