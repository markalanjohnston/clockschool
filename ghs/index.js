function bellSchedule() {
  let d = new Date();
  let currentTimeIndex = (d.getHours() * 60 * 60) + (d.getMinutes() * 60) + d.getSeconds();
  let currentMessage = "";
  let nextMessage = "";
  let sched = [
    { "startTime": 820, "endTime": 905, "msg": "1st Period" },
    { "startTime": 910, "endTime": 955, "msg": "2nd Period" },
    { "startTime": 1000, "endTime": 1045, "msg": "3rd Period" },
    { "startTime": 1050, "endTime": 1135, "msg": "4th Period" },
    { "startTime": 1140, "endTime": 1320, "msg": "5th Period" },
    { "startTime": 1140, "endTime": 1210, "msg": "A Lunch" },
    { "startTime": 1215, "endTime": 1245, "msg": "B Lunch" },
    { "startTime": 1250, "endTime": 1320, "msg": "C Lunch" },
    { "startTime": 1325, "endTime": 1410, "msg": "6th Period" },
    { "startTime": 1415, "endTime": 1500, "msg": "7th Period" },
    { "startTime": 1505, "endTime": 1550, "msg": "8th Period" }
  ];

  let sl = sched.length;

  //Current Events
  let currentMessages = [];
  for (let i = 0; i < sl; i++) {
    eventStartTime = (Math.floor(sched[i].startTime / 100) * 3600) + ((sched[i].startTime % 100)*60);
    eventEndTime = (Math.floor(sched[i].endTime / 100) * 3600) + ((sched[i].endTime % 100)*60);
    
    if (currentTimeIndex >= eventStartTime && currentTimeIndex <= eventEndTime) {
      let minutesRemaining = Math.floor((eventEndTime - currentTimeIndex) / 60);
      let secondsRemaining = (eventEndTime - currentTimeIndex) % 60;
      let countDown = minutesRemaining + ":" + (secondsRemaining <10?'0':'') + secondsRemaining;
      currentMessages.push(sched[i].msg + " - " + countDown);

      //update progress bar
      let progressBar = document.getElementById("progress-bar");
      let newWidth = ((eventEndTime - currentTimeIndex) / (eventEndTime - eventStartTime)) * 100;
      let newColor = "";
      if (eventEndTime - currentTimeIndex < 300){
        newColor = "red";
      }
      else if (newWidth >= 10 && newWidth < 50) {
        newColor = "orange";
      } else {
        newColor = "green";
      }
      
      progressBar.style.width = newWidth + "%";
      progressBar.style.backgroundColor = newColor;      
      
    }
  }
  if (currentMessages.length > 0) {
    document.getElementById("current-period").innerHTML = currentMessages.join(" <br> ");
  } else {
    document.getElementById("current-period").innerHTML = "No active event";
  }


//Upcoming Events
let remainingMessages = [];
for (let i = 0; i < sl; i++) {
  eventStartTime = (Math.floor(sched[i].startTime / 100) * 3600) + ((sched[i].startTime % 100)*60);
  eventEndTime = (Math.floor(sched[i].endTime / 100) * 3600) + ((sched[i].endTime % 100)*60);
  
  if (currentTimeIndex <= eventStartTime) {
    let nextStartTime = "";
    if (Math.floor(sched[i].startTime / 100) === 12) {
      nextStartTime = "at " + Math.floor(sched[i].startTime / 100) + ":" + (sched[i].startTime % 100 < 10 ? '0' : '') + sched[i].startTime % 100 + " pm <br>";
    } else if (Math.floor(sched[i].startTime / 100) > 12) {
      nextStartTime = "at " + (Math.floor(sched[i].startTime / 100) % 12) + ":" + (sched[i].startTime % 100 < 10 ? '0' : '') + sched[i].startTime % 100 + " pm <br>";
    } else {
      nextStartTime = "at " + Math.floor(sched[i].startTime / 100) + ":" + (sched[i].startTime % 100 < 10 ? '0' : '') + sched[i].startTime % 100 + " am <br>";
    }
    
  
    nextMessage = sched[i].msg + " at " + nextStartTime;
    for (let j = i+1; j < sl; j++) {
      if (Math.floor(sched[j].startTime / 100) === 12) {
        nextStartTime = "at " + Math.floor(sched[j].startTime / 100) + ":" + (sched[j].startTime % 100 < 10 ? '0' : '') + sched[j].startTime % 100 + " pm <br>";
      } else if (Math.floor(sched[j].startTime / 100) > 12) {
        nextStartTime = "at " + (Math.floor(sched[j].startTime / 100) % 12) + ":" + (sched[j].startTime % 100 < 10 ? '0' : '') + sched[j].startTime % 100 + " pm <br>";
      } else {
        nextStartTime = "at " + Math.floor(sched[j].startTime / 100) + ":" + (sched[j].startTime % 100 < 10 ? '0' : '') + sched[j].startTime % 100 + " am <br>";
      }
      
      remainingMessages.push(sched[j].msg, nextStartTime);
    }
    document.getElementById("next-period").innerHTML = nextMessage + remainingMessages.join(" ");   
    break;
  } else {
    document.getElementById("next-period").innerHTML = "No upcoming events";
  }
}



  setTimeout(function () { bellSchedule(); }, 1000);
}