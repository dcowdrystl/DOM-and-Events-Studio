// Write your JavaScript code here.

function init () {
    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const rocket = document.getElementById("rocket");
    const marginRight = 0;
    let marginBottom = 0;
    rocket.style.marginBottom = `${marginBottom}px`

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
  

            marginBottom - 100; 
              
        });

    //     up.addEventListener('click', function(event){
  

    //         rocket.style.margin = "green"; 
    //         spaceShuttleHeight.innerHTML = 0; 
    //      });

    //  left.addEventListener('click', function(event){
  

    //     rocket.style.margin = "green"; 
    //     spaceShuttleHeight.innerHTML = 0; 
    //  });

    //  right.addEventListener('click', function(event){
  

    //     rocket.style.margin = "green"; 
    //     spaceShuttleHeight.innerHTML = 0; 
    // });


    }

window.addEventListener("load", init);