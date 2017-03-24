function setAlarm(){
    var hour = document.getElementById("sethour");
    hour = parseInt(hour.value);
    var minute = document.getElementById("setminute");
    minute = parseInt(minute.value);

var now             = new Date().getTime(),
    _5_sec_from_now = new Date(now + 5*1000);

cordova.plugins.notification.local.schedule({
    text: "Delayed Notification",
    at: _5_sec_from_now,
    led: "FF0000",
    sound: null
});
}
