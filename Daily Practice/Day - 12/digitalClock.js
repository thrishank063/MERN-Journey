function updateClock(){
    const date = new Date();
    let hours = date.getHours().toString().padStart(2,0);
    let meridian = hours >=12 ? "PM" : "AM";
    hours = hours % 12 || 12
    hours = hours.toString().padStart(2, 0);
    let minutes = date.getMinutes().toString().padStart(2,0);
    let seconds = date.getSeconds().toString().padStart(2,0);
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${meridian}`;

}
let intervalId = setInterval(updateClock,1000)
