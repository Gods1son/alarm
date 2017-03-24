function setAlarm(){
    var hour = document.getElementById("sethour");
    hour = parseInt(hour.value);
    var minute = document.getElementById("setminute");
    minute = parseInt(minute.value);
    var reason = document.getElementById("setreason");
    var d = new Date();
    d.setHours(hour);
    d.setMinutes(minute);
    //d.setSeconds(0);

cordova.plugins.notification.local.schedule({
    text: reason.value,
    at: d,
    led: "blue",
    sound: null,
});


}
