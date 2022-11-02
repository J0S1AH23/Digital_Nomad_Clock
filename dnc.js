
// Let timeZoneArr = [["Cali", ], [],[],[] ]


const clock_Local = setInterval(function localTime() {
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    let todaysDate = new Date();

    document.getElementById("hours").innerHTML = todaysDate.getHours()
    document.getElementById("minutes").innerHTML = todaysDate.getMinutes()
    document.getElementById("seconds").innerHTML = todaysDate.getSeconds()
    // console.log(todaysDate)
}, 1000);


function callAwayClock (awayZone) {
    // awayclock
   (setInterval(function localTime() {
       
        const hours = document.getElementById('hours_away');
        const minutes = document.getElementById('minutes_away');
        const seconds = document.getElementById('seconds_away');
        let todaysDate = new Date().toLocaleString("en-US", {timeZone: awayZone})
        
        document.getElementById("hours_away").innerHTML = todaysDate.getHours()
        document.getElementById("minutes_away").innerHTML = todaysDate.getMinutes()
        document.getElementById("seconds_away").innerHTML = todaysDate.getSeconds()
     }), 1000);
    
}



// const awayclock = (setInterval(function localTime() {
//         let todaysDate = new Date();
//         const hours = document.getElementById('hours_away');
//         const minutes = document.getElementById('minutes_away');
//         const seconds = document.getElementById('seconds_away');
//         new Date().toLocaleString("en-US", {timeZone: "America/New_York"})

//         document.getElementById("hours_away").innerHTML = todaysDate.getHours()
//         document.getElementById("minutes_away").innerHTML = todaysDate.getMinutes()
//         document.getElementById("seconds_away").innerHTML = todaysDate.getSeconds()
// }), 1000);
