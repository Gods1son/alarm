function setAlarm(){
    var hour = document.getElementById("sethour");
    hour = parseInt(hour.value);
    var minute = document.getElementById("setminute");
    minute = parseInt(minute.value);
    var d = new Date();
    d.setHours(hour);
    d.setMinutes(minute);
    d.setSeconds(0);

cordova.plugins.notification.local.schedule({
    text: "Notification Test",
    at: d,
    led: "blue",
    sound: null,
},function callback(){
    hour.value = '0';
    minute.value = '0';
    alert("alarm set");
});
}
