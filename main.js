//Declare variables
let earlyRegister = 1000;
let lateRegister = 999;

//Display information for runners
function welcome(){
    console.log('Welcome to the event!');
    console.log('');
    console.log('Early adult registration ends at 9:30A.M');
    console.log('Late adult registration ends at 11:00A.M');
    console.log('Youth registration ends at 12:30P.M')
    checkIn();
}
//Check in
function checkIn(){
    let checkInBool = window.prompt('Would you like to check in? (Y/N)').toUpperCase(); 
    alert(`You chose ${checkInBool}`);
    validCheckIn();
    return checkInBool;
}

//Check if check-in is true
function validCheckIn(checkInBool){
    if(checkInBool === 'Y'){
        logTime();
    }
    else{
        welcome();
    }
}

function logTime(){
    //log the time into variables
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let currentTime = hour + minutes;

    //return time
    console.log(`The time is ${hour}:${minutes}`);
    return currentTime;
}

//Assigns the runner a number based on their registration time
function assignNumber(currentTime){ //early registrants get a number over or equal to 1000
    if(currentTime <= 930){
        console.log(`Your race number is ${earlyRegister}`);
        console.log('Enjoy the race!');
        earlyRegister++;
        welcome();
    }

    else if(currentTime > 930){ //Late registrants and youth get a number less than 1000
        console.log(`Your race number is ${lateRegister}`);
        console.log('Enjoy the race!');
        lateRegister++;
        welcome();
    }

    else{
        console.log('See registration desk')
        welcome();
    }
}

//Initialize program
welcome();