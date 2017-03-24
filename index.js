function setAlarm(){
    var hour = document.getElementById("sethour");
    hour = parseInt(hour.value);
    var minute = document.getElementById("setminute");
    minute = parseInt(minute.value);

    // set wakeup timer
window.wakeuptimer.wakeup( successCallback,
                           errorCallback,
                           // a list of alarms to set
                           alarms : [{
                             type : 'onetime',
                             time : { hour : hour, minute : minute },
                             extra : { message : 'json containing app-specific information to be posted when alarm triggers' },
                    message : 'Alarm has expired!'}]
                         );

// example of a callback method
var successCallback = function(result) {
  if (result.type==='wakeup') {
    console.log('wakeup alarm detected--' + result.extra);
  } else if(result.type==='set'){
    console.log('wakeup alarm set--' + result);
  } else {
    console.log('wakeup unhandled type (' + result.type + ')');
  }
};

var errorCallback = function(){
    alert("error");
}
}
