light = "green" // it will be automatically declared as global varibale
console.log(light)

if(light === "green"){
    console.log("Drive")
} else if( light == "orange"){
    console.log("Get Ready")
} else if(light == "red"){
    console.log("stop")
} else{
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}

//converting the previous if-else example with switch-case
switch(light) {
    case "green":
        console.log("Drive")
        break;
    case "orange":
        console.log("Get Ready")
        break;
    case "red":
        console.log("Stop")
        break;
    default:
        //this block will run if no condition matches
       console.log('The light is not green, orange, or red');
}