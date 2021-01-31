//current day displayed
var currentDay = moment().format("MMMM Do YYYY");

$("#currentDay").text(currentDay);
// save button
var saveButton = $(".saveBtn");

$(document).ready(function () {

  function time (){
      var currentTime = moment().hour();
      
    $("textarea").each(function () {
        
      // timeslots will now be integers  
      var timeSlot = parseInt($(this).attr("id"));
      
  
      if (timeSlot < 8 ) {
        timeSlot = timeSlot + 12
      }
      
      
      if (currentTime < timeSlot) {
        console.log(timeSlot);
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass("future")
          
        }
        else if (currentTime > timeSlot){
                  $(this).removeClass('present');
                  $(this).removeClass('future');
                  $(this).addClass("past");
              }
          else {
                
              $(this).removeClass('future');
              $(this).removeClass('past');
              $(this).addClass("present");
              }
  
          
          
    });
  }
  time ();
  
  // click event on save button
  // saves note entry 
  $(".saveBtn").on("click", function(){
      var time = $(this).siblings('textarea').attr('id');
      var value = $(this).siblings('textarea').val()
      localStorage.setItem(time, value)
  })
  // note entry in each time block will go to local storage
  $(".time-block").val(localStorage).get("9")
  $(".time-block").val(localStorage).get("10")
  $(".time-block").val(localStorage).get("11")
  $(".time-block").val(localStorage).get("12")
  $(".time-block").val(localStorage).get("1")
  $(".time-block").val(localStorage).get("2")
  $(".time-block").val(localStorage).get("3")
  $(".time-block").val(localStorage).get("4")
  $(".time-block").val(localStorage).get("5")
  











})
