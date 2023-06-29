function startTime() {
  var today = new Date();
  var h = today.getUTCHours() + 8;
  var m = today.getUTCMinutes();
  var s = today.getUTCSeconds();
  
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('malaysia-clock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

startTime();
