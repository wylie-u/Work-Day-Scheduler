//current day displayed
var currentDay = moment().format("MMMM Do YYYY");
console.log(currentDay);
$("#currentDay").text(currentDay);
// save button
var saveButton = $(".saveBtn");
// var test = moment().date(9);
// console.log('trial');

//THEN each time block is color-coded to indicate whether it is in the past, present, or future
// $("#9")
// console.log('#9');
// $("#10");
// $("#11");
// $("#12");
// $("#1");
// $("#2");
// $("#3");
// $("#4");
// $("#5");

$(document).ready(function () {

  function trial (){
  var currentTime = moment().hours();
  console.log("test");
  $("textarea").each(function () {
    var timeSlot = parseInt($(this).attr("id"));
    

    if (currentTime === timeSlot) {
      $(this).addClass("present");
      console.log("testing");
    }
  })
}  
trial()
});

//. add class present/past/future

//to know if past, present, or future
//we need to compare current time to each one of the timeblocks
// current time: using momentjs
// timeblock time: id
//(note: strings or numbers comparison)
// $(document).ready(function () {

// // console.log(currentTime);
// // set strings to numbers
// var timeColor = parseInt($(this).attr("id"))
// console.log('test');

// }

//for loop to run through all time blocks, also try .each() if for loop doesn't make sense.

//if statement
// if past: current time > time block time
//(target textarea goes here. Hint: this ).attr("class", "past"), or checkout addClass if simplier.
// else if present: ===
// else future

// $(document).ready(function () {

//     if (){
//         $(this).addClass("present")
//     }
//     else if (){
//         $(this).addClass("past");
//     }
//     else (){
//         $(this).addClass("future")
//     }
//     }

//click event
//create a varialbe to grab the value which user typed into the textarea
//var x = (target the textarea which was noted).val();
// var name1 = "Trinh";
// var value1 = 1;
// localStorage.setItem(name1, value1)

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at  the top of the calendar
////
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
/// each block for each hour of day done in html
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// saveButton.on("click", function(){
//     var time = $(this).parent().attr("id");
//     console.log('test');
// })
// WHEN I click the save button for that time block
/// - event listener,  click
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

// $(document).ready(function() {

// }
// }
