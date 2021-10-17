function getTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var interval = setInterval(getTime, 1000);