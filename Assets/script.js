const now = moment().format('MMMM Do YYYY');

$("#currentDay")

newTime = $("<p>")

newTime.text("");

$("currentDay").append(newTime)
console.log('test');

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//// div showing current day 
// WHEN I scroll down
// scroller 
// THEN I am presented with time blocks for standard business hours
/// each block for each hour of day 
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// $(document).ready(function() {

// }