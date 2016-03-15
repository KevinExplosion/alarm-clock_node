exports.Alarm = function(setTime) {
  this.setTime = setTime;
  // this.currentTime = currentTime;
};

exports.Alarm.prototype.entry = function() {
  return "<h2>" + this.setTime + "</h2>";
};

exports.Alarm.prototype.checkAlarm = function(setTime) {
  if (setTime === parseInt(moment())) {
    return true;
  }

};
