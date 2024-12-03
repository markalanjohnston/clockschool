function bellSchedule() {
  let d = new Date();
  let currentTimeIndex = (d.getHours() * 60 * 60) + (d.getMinutes() * 60) + d.getSeconds();
  let currentMessage = "";
  let nextMessage = "";
  let sched = [
    { "startTime": 600, "endTime": 800, "msg": "arrival at 8am" },
    { "startTime": 800, "endTime": 820, "msg": "study hall" },
    { "startTime": 820, "endTime": 905, "msg": "1st Period" },
    { "startTime": 910, "endTime": 955, "msg": "2nd Period" },
    { "startTime": 1000, "endTime": 1045, "msg": "3rd Period" },
    { "startTime": 1050, "endTime": 1135, "msg": "4th Period" },
    { "startTime": 1140, "endTime": 1210, "msg": "A Lunch" },
    { "startTime": 1215, "endTime": 1245, "msg": "B Lunch" },
    { "startTime": 1250, "endTime": 1320, "msg": "C Lunch" },
    { "startTime": 1325, "endTime": 1410, "msg": "6th Period" },
    { "startTime": 1415, "endTime": 1500, "msg": "7th Period" },
    { "startTime": 1500, "endTime": 1550, "msg": "8th Period" },
    { "startTime": 1550, "endTime": 1555, "msg": "9th Period" },
    { "startTime": 1555, "endTime": 1605, "msg": "10th Period" },
    { "startTime": 1605, "endTime": 1655, "msg": "11th Period" },
    { "startTime": 1655, "endTime": 1715, "msg": "12th Period" },
    { "startTime": 1715, "endTime": 1820, "msg": "13th Period" },
    { "startTime": 1820, "endTime": 1825, "msg": "14th Period" },
    { "startTime": 1825, "endTime": 1855, "msg": "15th Period" },
    { "startTime": 1855, "endTime": 1935, "msg": "16th Period" },
    { "startTime": 1935, "endTime": 1951, "msg": "17th Period" },
    { "startTime": 1951, "endTime": 2045, "msg": "18th Period" },
    { "startTime": 2045, "endTime": 2100, "msg": "19th Period" },
    { "startTime": 2100, "endTime": 2155, "msg": "20th Period" },
    { "startTime": 2155, "endTime": 2210, "msg": "21st Period" },
    { "startTime": 2210, "endTime": 2255, "msg": "22nd Period" },
    { "startTime": 2255, "endTime": 2320, "msg": "23rd Period" },
    { "startTime": 2320, "endTime": 2355, "msg": "24th Period" }
  ];

  // Note: the last end time is 2375, which is 11:59 PM (2359 in military time)


  let sl = sched.length;

  //Current Events
  let currentMessages = [];
  for (let i = 0; i < sl; i++) {
    eventStartTime = (Math.floor(sched[i].startTime / 100) * 3600) + ((sched[i].startTime % 100) * 60);
    eventEndTime = (Math.floor(sched[i].endTime / 100) * 3600) + ((sched[i].endTime % 100) * 60);

    if (currentTimeIndex >= eventStartTime && currentTimeIndex <= eventEndTime) {
      let minutesRemaining = Math.floor((eventEndTime - currentTimeIndex) / 60);
      let secondsRemaining = (eventEndTime - currentTimeIndex) % 60;
      let countDown = minutesRemaining + ":" + (secondsRemaining < 10 ? '0' : '') + secondsRemaining;
      currentMessages.push(sched[i].msg + " - " + countDown);

      //update progress bar
      let progressBar = document.getElementById("progress-bar");
      let newWidth = ((eventEndTime - currentTimeIndex) / (eventEndTime - eventStartTime)) * 100;
      let newColor = "";
      if (eventEndTime - currentTimeIndex < 300) {
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
    eventStartTime = (Math.floor(sched[i].startTime / 100) * 3600) + ((sched[i].startTime % 100) * 60);
    eventEndTime = (Math.floor(sched[i].endTime / 100) * 3600) + ((sched[i].endTime % 100) * 60);

    if (currentTimeIndex <= eventStartTime) {
      let nextStartTime = "";
      if (Math.floor(sched[i].startTime / 100) === 12) {
        nextStartTime = "at " + Math.floor(sched[i].startTime / 100) + ":" + (sched[i].startTime % 100 < 10 ? '0' : '') + sched[i].startTime % 100 + " pm <br>";
      } else if (Math.floor(sched[i].startTime / 100) > 12) {
        nextStartTime = "at " + (Math.floor(sched[i].startTime / 100) % 12) + ":" + (sched[i].startTime % 100 < 10 ? '0' : '') + sched[i].startTime % 100 + " pm <br>";
      } else {
        nextStartTime = "at " + Math.floor(sched[i].startTime / 100) + ":" + (sched[i].startTime % 100 < 10 ? '0' : '') + sched[i].startTime % 100 + " am <br>";
      }


      nextMessage = sched[i].msg + " " + nextStartTime;
      for (let j = i + 1; j < sl; j++) {
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