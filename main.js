var buttons = document.getElementsByTagName("button");
var inputs = document.getElementsByTagName("input");
var sections = document.getElementsByTagName("section");


var sendMe = buttons[0];
var sendFriend = buttons[1];

var myInput = inputs[0];
var mySection = sections[0];
var myText = document.getElementById("mytext");

var friendInput = inputs[1];
var friendSection = sections[1];
var friendText = document.getElementById("mytext");


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





sendFriend.addEventListener('click', function(otherSection2) {
	
	var friendTextDiv = document.createElement('content');
	var friendSpan = document.createElement('span');
	friendSpan.className = 'spanning';
	
	friendTextDiv.setAttribute("id", "mytext");
	friendTextDiv.textContent = friendInput.value
	friendTextDiv.appendChild(friendSpan);
	friendSection.appendChild(friendTextDiv);
	console.log(friendSection.lastChild);
	
	if (friendSection.hasChildNodes) {
	otherSection2 = sections[0]
	var otherText2 =  document.createElement('content');
	var otherSpan2 = document.createElement('span');
	otherSpan2.className = 'spanning';
	otherText2.setAttribute("id", "otherText");	
	otherText2.style.float = "right";
	
	otherText2.textContent = friendSection.lastChild.textContent;
	console.log(otherText2);
	otherText2.appendChild(otherSpan2);	
	otherSection2.appendChild(otherText2);
	}
	
	friendInput.value = " ";

	
	
	alert("friend is working");
});