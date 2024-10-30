// Ending Card Messages
let messages: string[] = [
    "So Close!",
    "Anvil.",
    "Tip: Click The Circles",
    "Give phoebe money",
    "Paypal Phoebe 30,000 usd",
    "Happy yourself to sleep tonight"
];
export let message: string = "";

// Currently active circles - all circles are set to be inactive at first
// export let activeCircles: boolean[] = Array(20).fill(false); 

//  Array of values pertaining to status of circles
let clickedCircles = new Set<number>();

// creates an array like data object where each value can only appear once (this is to stop a circle from being picked twice)
export let randomCircles = new Set<number>();

// Timing
let start = Date.now();
let end = Date.now();
let elapsed;

let showScreen = false;

// Reset the lgoic and begin a new game
const triggerReset = function() {
    // displayScreen();
    // setTimeout(() => {
    //     showScreen = false;
    // }, 3000)
    
    // resting all variables that could cause issues later 
    // clickedCircle = -1;
    setRandomCircles();

    start = Date.now()
}

// this is clunky but fuck you
// well thats not very nice, fuck you too -pp
export const firstReset = function() {
    // setTimeout(() => {
    //     showScreen = false;
    // }, 3000)
    setRandomCircles();

    start = Date.now()
}

// handle click -> popper-buttons sends back a button id
export const handleClick = function(button_id: number) {
    // checks if the the circle clicked is a circle that is active
    console.log(`${button_id}, is the button pressed`)
    if (randomCircles.has(button_id)) {
        clickedCircles.add(button_id)
    } else {
        console.log("You lose")
        triggerReset()
    }
    
    if (randomCircles == clickedCircles){
        console.log("You win!!")
        triggerReset()
    }
}

// Compare two arrays
const arrayComparison = function(array1: any[], array2: any[]) {
    if (array1.length == array2.length) {
        return array1.every( (item, index) => {
            if (item == array2[index]) {
                return true;
            } else {
                return false;
            }
        })
    } else {
        return false;
    }
}

// generate random cirlces on board
const setRandomCircles = function() {
    // variables settable for different board sizes
    const boardSizeX = 4
    const boardSizeY = 5
    const boardArea = boardSizeX * boardSizeY;

    // creates an array with an entry for every coordinate and fills every entry with false
    // activeCircles = Array(boardArea).fill(false);

    // adjusted as needed, no issues caused by changing
    const numActiveCircles = 7;
        
    // while there are less randomly chosen cirlces than there are numactive cirlces keep generatign new stuff
    while (randomCircles.size < numActiveCircles) {
        // genreating a random number and addign it to random circles
        randomCircles.add(Math.floor(Math.random() * boardArea))
    }

}

setRandomCircles()

// Display the red screen (currently only on-fail implemented) with optional custom message
// const displayScreen = function(customMsg: any = undefined) {
//     showScreen=true;
//     if (customMsg == undefined) {
//         message = messages[Math.floor(Math.random() * messages.length)];
//     } else {
//         message = customMsg;
//     }
// }