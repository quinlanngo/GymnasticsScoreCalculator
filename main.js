
 /* Class representing a gymnastics skill.
 */
class Skill {

   /**
   * Create a new Skill.
   * @param {string} name - The name of the skill.
   * @param {string} letterValue - The letter value (difficulty rating) of the skill.
   * @param {string} group - The group classification of the skill.
   */
  constructor(name, letterValue, group) {
      this.name = name;
      this.letterValue = letterValue;
      this.group = group;
      this.value = this.calculateValue();
  }
  /**
   * Calculate the numeric value of the skill based on its letter value.
   * The mapping of letter values to numeric values is assumed to be:
   * 'A' -> 0.1, 'B' -> 0.2, 'C' -> 0.3, 'D' -> 0.4, 'E' -> 0.5, and so on.
   * @returns {number} The numeric value of the skill.
   */
  calculateValue() {
      const letterToValue = {
          'A': 0.1,
          'B': 0.2,
          'C': 0.3,
          'D': 0.4,
          'E': 0.5,
          'F': 0.6,
          'G': 0.7,
          'H': 0.8,
          'I': 0.9,
          'J': 1.0,
      };
      return letterToValue[this.letterValue] || letterValue;
  }
}


/** SKILL DEFINITIONS

  After selecting an event, the corresponding map of skills will be used to autofill and evaluate. 
*/
const floorSkillsMap = new Map();

//ELEMENT GROUP 1: NON-ACROBATIC ELEMENTS
// A Skills
floorSkillsMap.set("handstand", new Skill("handstand", 'A', "I"));
floorSkillsMap.set("rock to handstand from prone", new Skill("rock to handstand from prone", 'A', "I"));
floorSkillsMap.set("handstand lower to L/straddle", new Skill("handstand lower to L/straddle", 'A', "I"));
floorSkillsMap.set("press handstand from stand", new Skill("press handstand from stand", 'A', "I"));
floorSkillsMap.set("straddle planche", new Skill("straddle planche", 'A', "I"));
floorSkillsMap.set("pirouette", new Skill("pirouette", 'A', "I"));
floorSkillsMap.set("l-sit turn over to stand", new Skill("l-sit turn over to stand", 'A', "I"));
floorSkillsMap.set("front walkover", new Skill("front walkover", 'A', "I"));
floorSkillsMap.set("split", new Skill("split", 'A', "I"));
floorSkillsMap.set("scale", new Skill("scale", 'A', "I"));
floorSkillsMap.set("back handspring to front support", new Skill("back handspring to front support", 'A', "I"));
floorSkillsMap.set("butterfly", new Skill("butterfly", 'A', "I"));
floorSkillsMap.set("circle", new Skill("circle", 'A', "I"));
floorSkillsMap.set("flair", new Skill("flair", 'A', "I"));
floorSkillsMap.set("flair with half spindle", new Skill("flair with half spindle", 'A', "I"));
floorSkillsMap.set("russian 360", new Skill("russian 360", 'A', "I"));
// B Skills
floorSkillsMap.set("piked press to handstand", new Skill("piked press to handstand", 'B', "I"));
floorSkillsMap.set("press to handstand from split", new Skill("press to handstand from split", 'B', "I"));
floorSkillsMap.set("press to handstand from seal", new Skill("press to handstand from seal", 'B', "I"));
floorSkillsMap.set("press to handstand from straddle l", new Skill("press to handstand from straddle l", 'B', "I"));
floorSkillsMap.set("press to handstand from straddle planche", new Skill("press to handstand from straddle planche", 'B', "I"));
floorSkillsMap.set("japanese press handstand", new Skill("japanese press handstand", 'B', "I"));
floorSkillsMap.set("v-sit", new Skill("v-sit", 'B', "I"));
floorSkillsMap.set("endo roll to handstand", new Skill("endo roll to handstand", 'B', "I"));
floorSkillsMap.set("scale 180", new Skill("scale 180", 'A', "I"));
floorSkillsMap.set("back pike to front support", new Skill("back pike to front support", 'B', "I"));
floorSkillsMap.set("back full to front support", new Skill("back full to front support", 'B', "I"));
floorSkillsMap.set("butterfly full twist", new Skill("butterfly full twist", 'B', "I"));
floorSkillsMap.set("flair/circle to handstand", new Skill("flair/circle to handstand", 'B', "I"));
floorSkillsMap.set("handstand lower to flair/circle", new Skill("handstand lower to flair/circle", 'B', "I"));
floorSkillsMap.set("flair with full spindle", new Skill("flair with full spindle", 'B', "I"));
floorSkillsMap.set("spindle 1/2 flair to handstand", new Skill("spindle 1/2 flair to handstand", 'B', "I"));
floorSkillsMap.set("russian 720 or 900", new Skill("russian 720 or 900", 'B', "I"));
floorSkillsMap.set("backward roll through handstand with half turn", new Skill("backward roll through handstand with half turn", 'B', "I"));
// C Skills
floorSkillsMap.set("press to handstand from v-sit", new Skill("press to handstand from v-sit", 'C', "I"));
floorSkillsMap.set("japanese press handstand from split", new Skill("japanese press handstand from split", 'C', "I"));
floorSkillsMap.set("manna", new Skill("manna", 'C', "I"));
floorSkillsMap.set("straight planche", new Skill("straight planche", 'C', "I"));
floorSkillsMap.set("endo roll to handstand piked", new Skill("endo roll to handstand piked", 'C', "I"));
floorSkillsMap.set("butterfly double full twist", new Skill("butterfly double full twist", 'C', "I"));
floorSkillsMap.set("gogoladze", new Skill("gogoladze", 'C', "I"));
floorSkillsMap.set("spindle 3/4 flair to handstand", new Skill("spindle 3/4 flair to handstand", 'C', "I"));
floorSkillsMap.set("fedorchenko", new Skill("fedorchenko", 'C', "I"));
floorSkillsMap.set("backward roll through handstand with hop full turn", new Skill("backward roll through handstand with hop full turn", 'C', "I"));
// D Skills
floorSkillsMap.set("press to handstand from manna", new Skill("press to handstand from manna", 'D', "I"));
floorSkillsMap.set("manna dislocate to handstand", new Skill("manna dislocate to handstand", 'D', "I"));
floorSkillsMap.set("press to handstand from straight planche", new Skill("press to handstand from straight planche", 'D', "I"));
floorSkillsMap.set("alvarino", new Skill("alvarino", 'D', "I"));
floorSkillsMap.set("air flairs", new Skill("air flairs", 'D', "I"));
floorSkillsMap.set("gogoladze, continue to flair", new Skill("gogoladze, continue to flair", 'D', "I"));

//ELEMENT GROUP 2: ACROBATIC ELEMENTS FORWARD
//A Skills
floorSkillsMap.set("front handspring", new Skill("front handspring", 'A', "II"));
floorSkillsMap.set("dive roll", new Skill("dive roll", 'A', "II"));
floorSkillsMap.set("front tuck/pike", new Skill("front tuck/pike", 'A', "II"));
floorSkillsMap.set("front half tucked/piked", new Skill("front half tucked/piked", 'A', "II"));
//B Skills
floorSkillsMap.set("front layout", new Skill("front layout", 'B', "II"));
floorSkillsMap.set("front layout half", new Skill("front layout half", 'B', "II"));
floorSkillsMap.set("front tuck/pike to front support", new Skill("front tuck/pike to front support", 'B', "II"));
//D Skills
floorSkillsMap.set("morandi", new Skill("morandi", 'D', "II"));
floorSkillsMap.set("double front tuck", new Skill("double front tuck", 'D', "II"));
floorSkillsMap.set("deferr", new Skill("deferr", 'D', "II"));
//E Skills
floorSkillsMap.set("double front pike", new Skill("double front pike", 'E', "II"));
floorSkillsMap.set("double front tuck full", new Skill("double front tuck full", 'E', "II"));
//F Skills
floorSkillsMap.set("zapata", new Skill("zapata", 'F', "II"));
floorSkillsMap.set("zapata 2", new Skill("zapata 2", 'F', "II"));

//ELEMENT GROUP 3: ACROBATIC ELEMENTS BACKWARD
//A Skills
floorSkillsMap.set("back handspring", new Skill("back handspring", 'A', "III"));
floorSkillsMap.set("back tuck/pike", new Skill("back tuck/pike", 'A', "III"));
floorSkillsMap.set("back tuck/pike half", new Skill("back tuck/pike half", 'A', "III"));
floorSkillsMap.set("jump back half turn to forward roll", new Skill("jump back half turn to forward roll", 'A', "III"));
//B Skills
floorSkillsMap.set("back layout", new Skill("back layout", 'B', "III"));
floorSkillsMap.set("back layout half", new Skill("back layout half", 'B', "III"));
//C Skills
floorSkillsMap.set("double back tuck", new Skill("double back tuck", 'C', "III"));
//D Skills
floorSkillsMap.set("tsukahara", new Skill("tsukahara", 'D', "III"));
floorSkillsMap.set("arabian double front tuck", new Skill("arabian double front tuck", 'D', "III"));
floorSkillsMap.set("double back pike", new Skill("double back pike", 'D', "III"));
//E Skills
floorSkillsMap.set("korosteljev", new Skill("korosteljev", 'E', "III"));
floorSkillsMap.set("arabian double front pike", new Skill("arabian double front pike", 'E', "III"));
floorSkillsMap.set("lou yun", new Skill("lou yun", 'E', "III"));
floorSkillsMap.set("double back layout", new Skill("double back layout", 'E', "III"));
//F Skills and Up
floorSkillsMap.set("double back tuck 5/2 twist", new Skill("double back tuck 5/2 twist", 'G', "III")); //unsure
floorSkillsMap.set("ri jong song", new Skill("ri jong song", 'G', "III"));
floorSkillsMap.set("hypolito", new Skill("hypolito", 'G', "III")); 
floorSkillsMap.set("liukin", new Skill("liukin", 'I', "III"));
floorSkillsMap.set("nagornyy", new Skill("nagornyy", 'J', "III"));
floorSkillsMap.set("tamayo", new Skill("tamayo", 'J', "III")); //unsure
floorSkillsMap.set("kolyvanov", new Skill("kolyvanov", 'J', "III")); //unsure
floorSkillsMap.set("penev", new Skill("penev", 'F', "III")); //unsure
floorSkillsMap.set("double back layout 2 twist", new Skill("double back layout 2 twist", 'G', "III")); 
floorSkillsMap.set("double back layout 5/2 twist", new Skill("double back layout 5/2 twist", 'H', "III")); 
floorSkillsMap.set("shirai 3", new Skill("shirai 3", 'I', "III")); 

//ELEMENT GROUP 4: SINGLE SALTO FORWARD AND BACKWARD WITH 1 OR MORE TURNS
//B Skills
floorSkillsMap.set("front full tucked/piked", new Skill("tucked/piked", 'B', "IV"));
floorSkillsMap.set("back full layout", new Skill("back full layout", 'B', "IV"));
floorSkillsMap.set("back 3/2 tucked", new Skill("back 3/2 tucked", 'B', "IV"));
//C Skills
floorSkillsMap.set("front full layout", new Skill("front full layout", 'C', "IV"));
floorSkillsMap.set("rudy", new Skill("rudy", 'C', "IV"));
floorSkillsMap.set("back 3/2 layout", new Skill("back 3/2 layout", 'C', "IV"));
//D Skills
floorSkillsMap.set("front double full layout", new Skill("front double full layout", 'D', "IV"));
floorSkillsMap.set("back 5/2 layout", new Skill("back 5/2 layout", 'D', "IV"));

floorSkillsMap.set("back triple full layout", new Skill("back triple full layout", 'D', "IV"));
//E Skills
floorSkillsMap.set("randy", new Skill("randy", 'E', "IV"));
floorSkillsMap.set("gonzalez", new Skill("gonzalez", 'E', "IV"));
//F Skills and Up
floorSkillsMap.set("shirai 2", new Skill("shirai 2", 'F', "IV"));
floorSkillsMap.set("goshima", new Skill("goshima", 'G', "IV"));
floorSkillsMap.set("shirai/nguyen", new Skill("shirai/nguyen", 'F', "IV"));


const pommelSkillsMap = new Map();

//ELEMENT GROUP 1: SINGLE LEG SWINGS AND SCISSORS
// A Skills
pommelSkillsMap.set("scissor", new Skill("scissor", 'A', "I"));
pommelSkillsMap.set("scissor 1/2", new Skill("scissor 1/2", 'A', "I"));

//B Skills
pommelSkillsMap.set("scissor side travel", new Skill("scissor side travel", 'B', "I"));
pommelSkillsMap.set("double scissor", new Skill("double scissor", 'B', "I"));
pommelSkillsMap.set("cut backward to handstand", new Skill("cut backward to handstand", 'B', "I"));
//C Skills
pommelSkillsMap.set("scissor hop sideways from one end to the other", new Skill("scissor hop sideways from one end to the other", 'C', "I"));
pommelSkillsMap.set("mini mikulak", new Skill("mini mikulak", 'C', "I"));
pommelSkillsMap.set("stepanyan", new Skill("stepanyan", 'C', "I"));
pommelSkillsMap.set("scissor handstand", new Skill("scissor handstand", 'C', "I"));
//D Skills
pommelSkillsMap.set("mikulak", new Skill("mikulak", 'D', "I"));
pommelSkillsMap.set("li ning", new Skill("li ning", 'D', "I"));


//ELEMENT GROUP 2: CIRCLES AND FLAIRS
//A Skills
pommelSkillsMap.set("circle/flair", new Skill("circle", 'A', "II"));
pommelSkillsMap.set("side circle", new Skill("side circle", 'A', "II"));
pommelSkillsMap.set("loop", new Skill("loop", 'A', "II"));
pommelSkillsMap.set("1/4 spindle", new Skill("1/4 spindle", 'A', "II"));
pommelSkillsMap.set("kehr", new Skill("kehr", 'A', "II"));
pommelSkillsMap.set("schwabenflank", new Skill("schwabenflank", 'A', "II"));
pommelSkillsMap.set("half russian", new Skill("half russian", 'A', "II"));
pommelSkillsMap.set("russian", new Skill("russian", 'A', "II"));
//B Skills
pommelSkillsMap.set("side circle", new Skill("side circle", 'B', "II"));
pommelSkillsMap.set("1 pommel circle", new Skill("1 pommel circle", 'B', "II"));
pommelSkillsMap.set("saddle loop", new Skill("saddle loop", 'B', "II"));
pommelSkillsMap.set("1/2 spindle", new Skill("1/2 spindle", 'B', "II"));
pommelSkillsMap.set("direct stockli", new Skill("direct stockli", 'B', "II"));
pommelSkillsMap.set("1 pommel kehr", new Skill("1 pommel kehr", 'B', "II"));
pommelSkillsMap.set("direct tramlot", new Skill("direct tramlot", 'B', "II"));
pommelSkillsMap.set("reverse stockli", new Skill("reverse stockli", 'B', "II"));
pommelSkillsMap.set("czechkehre", new Skill("czechkehre", 'B', "II"));
pommelSkillsMap.set("double russian", new Skill("double russian", 'B', "II"));
pommelSkillsMap.set("1 pommel 1/2 russian", new Skill("1 pommel 1/2 russian", 'B', "II"));
//C Skills
pommelSkillsMap.set("tippelt", new Skill("tippelt", 'C', "II"));
pommelSkillsMap.set("bertonceli", new Skill("bertonceli", 'C', "II"));
pommelSkillsMap.set("davtyan", new Skill("davtyan", 'C', "II"));
pommelSkillsMap.set("triple russian", new Skill("triple russian", 'C', "II"));
pommelSkillsMap.set("1 pommel russian", new Skill("1 pommel russian", 'C', "II"));
//D Skills
pommelSkillsMap.set("full spindle on leather", new Skill("full spindle on leather", 'D', "II"));
pommelSkillsMap.set("keikha", new Skill("keikha", 'D', "II"));
pommelSkillsMap.set("flair to handstand circle down", new Skill("flair to handstand circle down", 'D', "II"));
pommelSkillsMap.set("sohn", new Skill("sohn", 'D', "II"));
pommelSkillsMap.set("d flop", new Skill("d flop", 'D', "II"));
pommelSkillsMap.set("pinheiro", new Skill("pinheiro", 'D', "II"));
pommelSkillsMap.set("1 pommel double russian", new Skill("1 pommel double russian", 'D', "II"));
pommelSkillsMap.set("double russian between pommels", new Skill("double russian between pommels", 'D', "II"));
//E Skills
pommelSkillsMap.set("elchorn", new Skill("elchorn", 'E', "II"));
pommelSkillsMap.set("berkli", new Skill("berkli", 'E', "II"));
pommelSkillsMap.set("bezugo", new Skill("bezugo", 'E', "II"));
pommelSkillsMap.set("e flop", new Skill("e flop", 'E', "II"));
pommelSkillsMap.set("1 pommel triple russian", new Skill("1 pommel triple russian", 'E', "II"));
pommelSkillsMap.set("triple russian between pommels", new Skill("triple russian between pommels", 'E', "II"));
//F Skills
pommelSkillsMap.set("busnari", new Skill("busnari", 'F', "II"));

//ELEMENT GROUP 3: TRAVEL TYPE ELEMENTS 


const ringsSkillsMap = new Map();
ringsSkillsMap.set("front uprise", new Skill("front uprise", 'A', "I"));
ringsSkillsMap.set("cross", new Skill("cross", 'C', "II"));
ringsSkillsMap.set("kip to v", new Skill("kip to v", 'C', "III"));
ringsSkillsMap.set("double back tuck", new Skill("double back tuck", 'B', "IV"));


const vaultSkillsMap = new Map();

const pbarSkillsMap = new Map();
pbarSkillsMap.set("front uprise", new Skill("front uprise", 'A', "I"));
pbarSkillsMap.set("stutz to handstand", new Skill("stutz to handstand", 'C', "II"));
pbarSkillsMap.set("tippelt", new Skill("tippelt", 'D', "III"));
pbarSkillsMap.set("double back tuck", new Skill("double back tuck", 'C', "IV"));

const hbarSkillsMap = new Map();
hbarSkillsMap.set("back giant", new Skill("back giant", 'A', "I"));
hbarSkillsMap.set("voronin", new Skill("voronin", 'B', "II"));
hbarSkillsMap.set("endo", new Skill("endo", 'B', "III"));
hbarSkillsMap.set("double back tuck", new Skill("double back tuck", 'B', "IV"));


document.addEventListener('DOMContentLoaded', () => {
  const inputFields = document.querySelectorAll('#inputs-container input');
  let skillsMap = getSelectedEvent();

  inputFields.forEach(input => {
    autocomplete(input, skillsMap);
  });

  // Show or hide input fields based on the selected event
  if (skillsMap === vaultSkillsMap) {
    for (let i = 2; i < inputFields.length; i++) {
      inputFields[i].style.display = 'none';
    }
  } else {
    inputFields.forEach(input => input.style.display = 'block');
  }
});
// Event selection and handling
document.getElementById('select-event-button').addEventListener('click', () => {
  const selectedEvent = getSelectedEvent();
  const inputFields = document.querySelectorAll('#inputs-container input');
  let skillsMap = getSelectedEvent();


  inputFields.forEach(input => {
    autocomplete(input, skillsMap); 
  });

  // Show or hide input fields based on the selected event
  if (selectedEvent === 'vault') {
    for (let i = 2; i < inputFields.length; i++) {
      inputFields[i].style.display = 'none';
    }
  } else {
    inputFields.forEach(input => input.style.display = 'block');
  }
});

// Autocomplete function
function autocomplete(input, skillsMap) {
  let currentFocus;
  let skillList;
  if (skillsMap instanceof Map) {
  
    skillList = Array.from(skillsMap.keys());;
   
  } else {
    console.error("skillsMap is not defined or is not an instance of Map.");
  }

  input.addEventListener("input", function() {
    let list, item, val = this.value;
    closeAllLists();
    if (!val) return false;
    currentFocus = -1;
    list = document.createElement("DIV");
    list.setAttribute("id", this.id + "-autocomplete-list");
    list.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(list);

    skillList.forEach(skillKey => {
      if (skillKey.slice(0, val.length).toUpperCase() === val.toUpperCase()) {
        item = document.createElement("DIV");
        item.innerHTML = "<strong>" + skillKey.slice(0, val.length) + "</strong>";
        item.innerHTML += skillKey.slice(val.length);
        item.innerHTML += "<input type='hidden' value='" + skillKey + "'>";
        item.addEventListener("click", function() {
          input.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        list.appendChild(item);
      }
    });
  });

  input.addEventListener("keydown", function(e) {
    let list = document.getElementById(this.id + "-autocomplete-list");
    if (list) list = list.getElementsByTagName("div");
    if (e.keyCode === 40) {
      currentFocus++;
      addActive(list);
    } else if (e.keyCode === 38) {
      currentFocus--;
      addActive(list);
    } else if (e.keyCode === 13) {
      e.preventDefault();
      if (currentFocus > -1 && list) {
        list[currentFocus].click();
      }
    }
  });

  function addActive(list) {
    if (!list) return false;
    removeActive(list);
    if (currentFocus >= list.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = list.length - 1;
    list[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(list) {
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    const items = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < items.length; i++) {
      if (elmnt !== items[i] && elmnt !== input) {
        items[i].parentNode.removeChild(items[i]);
      }
    }
  }

  document.addEventListener("click", function(e) {
    closeAllLists(e.target);
  });
}

// Initialize the default skills map and run getSelectedEvent on page load
window.addEventListener('load', () => {
  const defaultSkillsMap = getSelectedEvent();
  const inputFields = document.querySelectorAll('#inputs-container input');

  inputFields.forEach(input => {
    autocomplete(input, defaultSkillsMap);
  });

  // Trigger the click event on the select event button to simulate selecting the default event
  document.getElementById('select-event-button').click();
});


function getSelectedEvent() {
  const selectedEvent = document.getElementById('event-select').value;
  switch(selectedEvent) {
    case "floor" : 
      return floorSkillsMap;
    case "pommels" : 
      return pommelSkillsMap;
    case "rings" : 
    return ringsSkillsMap;
    case "vault" : 
    return vaultSkillsMap;
    case "parallel-bars" : 
    return pbarSkillsMap;
    case "high-bar" : 
    return hbarSkillsMap;
    default:
      return floorSkillsMap;
  }
}

// Calculate score function
function calculateScore() {
  const inputFields = document.querySelectorAll('#inputs-container input');
  const skillsMap = getSelectedEvent();
  let startValue = 10.0;
  let numSkills = 0; // Variable to count the number of skills entered

  // Variables that represent the highest valued skill of each element group in the routine.
  let highestEG1 = 0.0;
  let highestEG2 = 0.0;
  let highestEG3 = 0.0;
  let highestDismount = 0.0;

  // Clear the previous skills summary
  const skillsSummaryDiv = document.getElementById('skills-summary');
  skillsSummaryDiv.innerHTML = ''; 

  inputFields.forEach(input => {
    const skillName = input.value.trim(); // Trim the input to handle blank entries
    if (skillName !== '') { // Check if the input is not blank
      const skill = skillsMap.get(skillName); 
      if (skill) {
        startValue += skill.value; // Increment start value by the skill's value

        // Check element group requirements
        if (skill.group == "I" && skill.value > highestEG1) {
          highestEG1 = skill.value;
        } else if (skill.group == "II" && skill.value > highestEG2) {
          highestEG2 = skill.value;
        } else if (skill.group == "III" && skill.value > highestEG3) {
          highestEG3 = skill.value;
        } else if (skill.group == "IV" && skill.value > highestDismount) {
          highestDismount = skill.value;
        }

        // Add the skill to the summary
        const skillSummary = document.createElement('div');
        skillSummary.textContent = `${skill.name} (Group: ${skill.group}, Value: ${skill.value.toFixed(1)})`;
        skillsSummaryDiv.appendChild(skillSummary);

        numSkills++; // Increment the number of skills
      }
    }
  });

  /* Award points for element group requirements.  
     If an element group is satisfied by a D or higher (>=0.4), 0.5 points are awarded.
     If an element group is satisfied by an A or higher (>=0.1), 0.3 points are awarded.
  */
  if (highestEG1 > 0) {
    startValue += 0.5;
  } 
  if (highestEG2 >= 0.4) {
    startValue += 0.5;
  } else if (highestEG2 >= 0.1) {
    startValue += 0.3;
  }
  if (highestEG3 >= 0.4) {
    startValue += 0.5;
  } else if (highestEG3 >= 0.1) {
    startValue += 0.3;
  } 
  if (highestDismount >= 0.4) {
    startValue += 0.5;
  } else if (highestDismount >= 0.1) {
    startValue += 0.3;
  } 

  // Deduct from start value if the number of skills is less than a certain threshold
  if (numSkills < 6) {
    const minNumSkills = 6;
    const missingSkills = minNumSkills - numSkills;
    startValue -= (3.0 + missingSkills); // Apply penalty for missing skills
  }

  // Ensure the start value doesn't go below 0
  startValue = Math.max(0, startValue);

  document.getElementById('total-value').textContent = `${startValue.toFixed(1)}`;
}


