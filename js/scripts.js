/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Set the URL of the JSON file you want to load
const url = "https://jsonplaceholder.typicode.com/posts";

// Set the request method to "GET"
xhr.open("GET", url);

// Set the response type to "json"
xhr.responseType = "json";

// Send the request
xhr.send();

// Handle the response when it arrives
xhr.onload = () => {
  // Get the JSON data from the response
  const jsonData = xhr.response;

  // Use the JSON data here
  console.log(jsonData);
};


// var juiceMenu = document.getElementById("test1");
// var juices = ('../menu.json').juices;
// for (var i = 0; i < juices.length; i++) {
//     console.log("test");
//     console.log(juices[i].name);
//     var card = document.createElement("p");
//     card.innerHTML = juices[i].name;
//     juiceMenu.appendChild(card);
// }

// document.getElementById(function() {
//     //hide first div or remove after append using `$(".card:first").remove()`
//     console.log("test1");
//     $(".card:first").hide();
//     $.ajax({
//       url: "https://jsonplaceholder.typicode.com/posts",
//       success: function(result) {
//         $.each(result, function(index, item) {
//           var cards = $(".card:first").clone() //clone first divs
//           var userId = item.userId;
//           var typeId = item.id;
//           var titleId = item.title;
//           var bodyId = item.body;
//           //add values inside divs
//           $(cards).find(".card-header").html("user id: " + userId + " - " + "id: " + typeId);
//           $(cards).find(".card-title").html(titleId);
//           $(cards).find(".card-text").html(bodyId);
//           $(cards).show(); //show cards
//           $(cards).appendTo($(".test1")); //append to container
//         });
//       }
//     });
//   });

  console.log("test2");