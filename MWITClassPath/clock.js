export function showTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let session = "AM";
    
    if (hours === 0) {
      hours = 12;
    }
    
    if (hours > 12) {
      hours = hours - 12;
      session = "PM";
    }
    
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    month = addZero(month);
    day = addZero(day);
    
    const time = `${hours}:${minutes}:${seconds} ${session}`;
    const dateStr = `${month}/${day}/${year}`;
    
    document.getElementById("clock").innerText = time + " " + dateStr;
    
    setTimeout(showTime, 1000);

  function addZero(time) {
    if (time < 10) {
      time = "0" + time;
    }
    
    return time;
  }
}
  
  
  
