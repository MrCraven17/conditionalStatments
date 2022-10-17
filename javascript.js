/* Alert box*/
function nFunction() {
  alert("You should try the impossible burger");
};
function yFunction() {
	alert("you should try the McDouble")
};
/* Confirm box */
function noFunction() {
  var txt;
  if (confirm("Do you like vegatables?")) {
    txt = "Get the impossible burger";}
    else {
      txt = "Go eat bark then";
    }
    document.getElementById("confirm").innerHTML = txt;
};
function yeFunction() {
  var txt;
  if (confirm("you should order a burger")) {
    txt = "Get the Mcdouble";}
    else {
      txt = "Go eat chicken then";
    }
    document.getElementById("confirm").innerHTML = txt;
};

/* Prompt function */
function yesFunction() {
  let text;
  let person = prompt("Please enter your name:", "Ma'am or Sir");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How do you like your meat?";
  }
  document.getElementById("prompt").innerHTML = text;
}function nopFunction() {
  let text;
  let person = prompt("Please enter your name:", "Ma'am or Sir");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How do yo like your dirt?";
  }
  document.getElementById("prompt").innerHTML = text;
}