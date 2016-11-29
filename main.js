var buttons = document.getElementsByTagName("button");
var inputs = document.getElementsByTagName("input");
var sections = document.getElementsByTagName("section");


var sendMe = buttons[0];
var sendFriend = buttons[1];

var myInput = inputs[0];
var mySection = sections[0];
var myText = document.getElementById("mytext");


sendMe.addEventListener('click', function(myText, otherSection) {
	
	var myTextDiv = document.createElement('content');
	var mySpan = document.createElement('span');
	mySpan.className = 'spanning';
	
	myTextDiv.setAttribute("id", "mytext");
	myTextDiv.textContent = myInput.value
	myTextDiv.appendChild(mySpan);
	mySection.appendChild(myTextDiv);
	console.log(mySection.lastChild);
	
	if (mySection.hasChildNodes) {
	otherSection = sections[1]
	var otherText =  document.createElement('content');
	var otherSpan = document.createElement('span');
	otherSpan.className = 'spanning';
	otherText.setAttribute("id", "otherText");	
	otherText.style.float = "right";
			
	otherText.textContent = mySection.lastChild.textContent;
	console.log(otherText);
	otherText.appendChild(otherSpan);	
	otherSection.appendChild(otherText);
	}
	
	myInput.value = " ";
	
});





sendFriend.addEventListener('click', function() {

	
	
	alert("friend is working");
});