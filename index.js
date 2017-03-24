function setAlarm(){
    var hour = document.getElementById("sethour");
    hour = parseInt(hour.value);
    var minute = document.getElementById("setminute");
    minute = parseInt(minute.value);
    var d = new Date();
    d.setHours(hour);
    d.setMinutes(minute);

cordova.plugins.notification.local.schedule({
    text: "Delayed Notification",
    at: d,
    led: "FF0000",
    sound: null
});
}
