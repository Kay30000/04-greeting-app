let userName = "Guil";

// Get the input and button from the page so we can read the name and listen for clicks.
let nameInput = document.getElementById("nameInput");
let welcomeButton = document.getElementById("welcomeButton");

// Create the message element once, then update it when the button is clicked.
let welcomeMessage = document.createElement("p");
welcomeMessage.textContent = "";

// Put the message below the button inside the container.
let container = document.querySelector(".container");
container.appendChild(welcomeMessage);

welcomeButton.addEventListener("click", function () {
	// Use the typed name if the user entered one, otherwise use the default name.
	let typedName = nameInput.value.trim();
	let displayName = typedName ? typedName : userName;

	// Build a fun message using the name value.
	welcomeMessage.textContent = "Welcome, " + displayName + "! Have a great day!";

	// Clear the input so the user can type a new name next time.
	nameInput.value = "";
});