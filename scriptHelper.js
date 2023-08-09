// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
        if(testInput==""){
            return "Empty"
        }else if(isNaN(testInput)===false){
            return "Is a Number"
        }else{
            return "Not a Number"
        }
 };

 console.log(formFied);


 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilot = document.getElementById("pilotName");
    let copilot = document.getElementById("copilotName");
    let fuel = document.getElementById("fuelLevel");
    let cargo = document.getElementById("cargoMass");

    if(validateInput(pilot)==="Empty" || validateInput(copilot)==="Empty" || validateInput(fuel)==="Empty" || validateInput(cargo)==="Empty" ){
        alert("All Fields Must Be Filled Out!")
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;