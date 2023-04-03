/*!
 * Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project


// With assistance from ChatGPT
// This code reads from a hosted json file and feeds the information into Bootstrap cards
// I learned how to read from a json file after hours wasted trying stuff out on StackOverflow

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Set the URL of the JSON file you want to load
const url = "https://realtedpark.github.io/website-challenge/menu.json";

// Set the request method to "GET"
xhr.open("GET", url);

// Set the response type to "json"
xhr.responseType = "json";

// Send the request
xhr.send();

// Handle the response when it arrives
xhr.onload = () => {
    // Get the JSON data from the response
    const juices = xhr.response.juices;
    const bowls = xhr.response.bowls;
    const snacks = xhr.response.snacks;

    var juiceMenu = document.getElementById("juices");
    for (var i = 0; i < juices.length; i++) {
        console.log(juices[i].name);
        var card = document.createElement("div");

        card.className = "card h-100 border-0";
        card.style = "width: 18rem;";
        card.innerHTML = "<img class=\"card-img-top\" src=" + juices[i].img + " alt=" + juices[i].name + " /><div class=\"card-body\"><h5 class=\"card-title\">" + juices[i].name + "</h5><p class=\"card-text\">" + juices[i].desc + "</p></div>";
        juiceMenu.appendChild(card);
    }

    var bowlMenu = document.getElementById("bowls");
    for (var i = 0; i < bowls.length; i++) {
        console.log(bowls[i].name);
        var card = document.createElement("div");

        card.className = "card h-100 border-0";
        card.style = "width: 18rem;";
        card.innerHTML = "<img class=\"card-img-top\" src=" + bowls[i].img + " alt=" + bowls[i].name + " /><div class=\"card-body\"><h5 class=\"card-title\">" + bowls[i].name + "</h5><p class=\"card-text\">" + bowls[i].desc + "</p></div>";
        bowlMenu.appendChild(card);
    }

    var snackMenu = document.getElementById("snacks");
    for (var i = 0; i < snacks.length; i++) {
        console.log(snacks[i].name);
        var card = document.createElement("div");

        card.className = "card h-100 border-0";
        card.style = "width: 18rem;";
        card.innerHTML = "<img class=\"card-img-top\" src=" + snacks[i].img + " alt=" + snacks[i].name + " /><div class=\"card-body\"><h5 class=\"card-title\">" + snacks[i].name + "</h5><p class=\"card-text\">" + snacks[i].desc + "</p></div>";
        snackMenu.appendChild(card);
    }

};