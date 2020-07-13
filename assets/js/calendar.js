let calendars = document.getElementsByClassName("calendar-container");

for (let i = 0; i < calendars.length; i++){
  calendars[i].addEventListener("click", toggleCalendar);
}

function toggleCalendar(){
  let serviceList = this.getElementsByClassName("addeventatc_dropdown")[0];
  let computedStyle = window.getComputedStyle(serviceList)
  let visibility = computedStyle.getPropertyValue('visibility');

  if (visibility == "hidden"){
    collapseAllCalendars();
    serviceList.style.visibility = "visible";
    this.classList.add("active");
  }
  else{
    serviceList.style.visibility = "hidden";
    this.classList.remove("active");
  }
}

function collapseAllCalendars(){
  for (let i = 0; i < calendars.length; i++){
    calendars[i].classList.remove("active");
    calendars[i].getElementsByClassName("addeventatc_dropdown")[0].style.visibility = "hidden";
  }
}