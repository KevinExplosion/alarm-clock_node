var Alarm = require('./../js/alarm-clock.js').Alarm;

$(document).ready(function(){
  $('#alarm').submit(function(event){
    event.preventDefault();
    var setTime = $('#setTime').val();
    var newAlarm = new Alarm(setTime);
    $('#alarmSetFor').append(newAlarm.entry() + "this is your alarm time");

  });
});


//use stopTime & currentTime
