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
