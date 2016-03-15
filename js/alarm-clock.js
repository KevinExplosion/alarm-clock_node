exports.Alarm = function(setTime) {
  this.setTime = setTime;
  // this.currentTime = currentTime;
};

exports.Alarm.prototype.entry = function() {
  return "<h2>" + this.setTime + "</h2>";
};

// if var alarm == var update, alert("alarm")
