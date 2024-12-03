let scheduleData = {};

function init() {
  fetch('schedule.json')
    .then(response => response.json())
    .then(data => {
      scheduleData = data;
      bell();
    })
    .catch(error => console.error('Error loading schedule data: ' + error));

  clock();
  themeSelect();
}

function bell() {
  let d = new Date();
  let currentTimeIndex = (d.getHours() * 60 * 60) + (d.getMinutes() * 60) + d.getSeconds();
  let currentMessage = "";
  let nextMessage = "";

  let sched = scheduleData.schedule;
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
        nextStartTime = "at " + (Math.floor(sched[i].startTime / 100) % 12) +
          ":" + (sched[i].startTime % 100 < 10 ? '0' : '') + sched[i].startTime % 100 + " pm <br>";
      } else {
        nextStartTime = "at " + Math.floor(sched[i].startTime / 100) + ":" + (sched[i].startTime % 100 < 10 ? '0' : '') + sched[i].startTime % 100 + " am <br>";
      }


      nextMessage = sched[i].msg + " " + nextStartTime;
      for (let j = i + 1; j < sl; j++) {
        if (Math.floor(sched[j].startTime / 100) === 12) {
          nextStartTime = "at " + Math.floor(sched[j].startTime / 100) + ":" + (sched[j].startTime % 100 < 10 ? '0' : '') + sched[j].startTime % 100 + " pm <br>";
        } else if (Math.floor(sched[j].startTime / 100) > 12) {
          nextStartTime = "at " + (Math.floor(sched[j].startTime / 100) % 12) +
            ":" + (sched[j].startTime % 100 < 10 ? '0' : '') + sched[j].startTime % 100 + " pm <br>";
        } else {
          nextStartTime = "at " + Math.floor(sched[j].startTime / 100) + ":" +
            (sched[j].startTime % 100 < 10 ? '0' : '') + sched[j].startTime % 100 + " am <br>";
        }

        remainingMessages.push(sched[j].msg, nextStartTime);
      }
      document.getElementById("next-period").innerHTML = nextMessage + remainingMessages.join(" ");
      break;
    } else {
      document.getElementById("next-period").innerHTML = "No upcoming events";
    }
  }

  setTimeout(function () { bell(); }, 1000);
}

function clock() {
  let d = new Date();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[d.getDay()];
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let month = months[d.getMonth()];
  let date = d.getDate();
  let year = d.getFullYear();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;


  document.getElementById("clock").innerHTML = `${hours}:${minutes} ${ampm}, ${day}, ${month} ${date}, ${year}`;
  //document.getElementById("date").innerHTML = `${day}, ${month} ${date}, ${year}`;

  setTimeout(function () { clock() }, 1000);
}

function themeSelect() {
  const themeSelect = document.getElementById('theme-select');
  const body = document.querySelector('body');

  themeSelect.addEventListener('change', function () {
    updateTheme(this.value);
  });

  function updateTheme(theme) {
    body.classList.remove('light', 'dark', 'colorful');
    body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }

  // Set the initial theme based on the stored preference
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    updateTheme(storedTheme);
    themeSelect.value = storedTheme;
  }
}