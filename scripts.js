// Write your JavaScript code here.

function init () {
    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    let rocket = document.getElementById("rocket");
    // let marginRight = 0;
    // let marginBottom = 0;
    // rocket.style.marginBottom = `${marginBottom}px`
    rocket.style.position = "absolute";
    rocket.style.left = "0px";
    rocket.style.bottom = "0px";

        takeoff.addEventListener('click', function(event){
            let confirmTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
            if(confirmTakeoff === true){
               flightStatus.innerHTML = 'Shuttle in flight.';
               shuttleBackground.style.backgroundColor = "blue"; 
               spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000; 
            }
        });

        landing.addEventListener('click', function(event){
            let confirmTakeoff = window.alert("The shuttle is landing. Landing gear engaged.");   
               flightStatus.innerHTML = 'The shuttle has landed';
               shuttleBackground.style.backgroundColor = "green"; 
               spaceShuttleHeight.innerHTML = 0; 
        });

        missionAbort.addEventListener('click', function(event){
            let confirmmissionAbort = window.confirm("Confirm that you want to abort the mission.");
            if(confirmmissionAbort === true){
               flightStatus.innerHTML = 'Mission Aborted';
               shuttleBackground.style.backgroundColor = "green"; 
               spaceShuttleHeight.innerHTML = 0; 
            }
        });

        
        down.addEventListener('click', function(event){
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
            rocket.style.bottom = `${parseInt(rocket.style.bottom) - 10}px`;  
        });

        up.addEventListener('click', function(event){
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
            rocket.style.bottom = `${parseInt(rocket.style.bottom) + 10}px`;
         });

     left.addEventListener('click', function(event){
        rocket.style.left = `${parseInt(rocket.style.left) - 10}px`;

     });

     right.addEventListener('click', function(event){
        rocket.style.left = `${parseInt(rocket.style.left) + 10}px`;

    });


    }

window.addEventListener("load", init);