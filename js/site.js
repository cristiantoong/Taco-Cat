function getValue(e){
  e.preventDefault();

  //make sure the alert is invisible
  // document.getElementById("alert").classList.add("invisible");

  //get user string from the page
  let userString = document.getElementById("userString").value;
  //check for a palindrome
  let returnObj = checkForPalindrome(userString);
  //display our message to the screen
  displayMessage(returnObj)
}


//check if string is a palindrome
function checkForPalindrome(userString){

  //taco cat
  userString = userString.toLowerCase();

  //remove spaces and special characters
  let regex = /[^a-z0-9]/gi;
  //anything not on this match(regex) replace that w/ empty string
  userString = userString.replace(regex, "");

  let revString = [];
  let returnObj = {};

  for(let i=userString.length-1; i>=0; i--){
    revString += userString[i];
  }

  if (revString == userString){
    returnObj.msg = "Well done! You entered a palindrome!"
  } else {
    returnObj.msg = "Sorry! You did not enter a palindrome!"
  }

  returnObj.reversed = revString;

  return returnObj;
}


function displayMessage(returnObj){
  document.getElementById("alertHeader").innerHTML = returnObj.msg;
  document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
  document.getElementById("alert").classList.remove("invisible");
}