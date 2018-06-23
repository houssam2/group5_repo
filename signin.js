// Initialize Firebase
var config = {
    apiKey: "AIzaSyCnBB7K1x-2rGzwngazfbBY4K7vCfjQuzE",
    authDomain: "group-5-project-1.firebaseapp.com",
    databaseURL: "https://group-5-project-1.firebaseio.com",
    projectId: "group-5-project-1",
    storageBucket: "",
    messagingSenderId: "522365895035"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// On Click event associated with the submit-button function
$(".submit-button").on("click", function(event) {
    event.preventDefault();

// Grab user input
var name = $("#InputName").val().trim();
var email = $("#InputEmail").val().trim();

// Create local "temporary" object for holding user data
var newUser = {
    name: name,
    email: email
};

// Upload new user data to the database
database.ref().push(newUser);

// Logs everything to the console
console.log(newUser.name);
console.log(newUser.email);

// Alert
alert("New User sucessfully added");

// Clears the text boxes
$("InputName").val("");
$("#InputEmail").val("");

});