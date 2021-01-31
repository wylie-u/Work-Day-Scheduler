var currentDay = moment().format("MMMM Do YYYY");
console.log(currentDay);
$("#currentDay").text(currentDay);
// save button
var saveButton = $(".saveBtn");

$(document).ready(function () {

function trial (){
    var currentTime = moment().hour();
    
  $("textarea").each(function () {
      
      
    var timeSlot = parseInt($(this).attr("id"));
    
    
    // read as 24 hr clock, google 
    // only want to add 12 to timeslots greater than twelve 
    // need to get current hour to read in same format as moment 

    if (timeSlot < 8 ) {
      timeSlot = timeSlot + 12
    }
    // timeslots need to match up with currentTime???
    
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
trial ();


$(".saveBtn").on("click", function(){
    var time = $(this).siblings('textarea').attr('id');
    var value = $(this).siblings('textarea').val()
    localStorage.setItem(time, value)
})

$(".time-block").val(localStorage).get("9")
$(".time-block").val(localStorage).get("10")
$(".time-block").val(localStorage).get("11")
$(".time-block").val(localStorage).get("12")
$(".time-block").val(localStorage).get("1")
$(".time-block").val(localStorage).get("2")
$(".time-block").val(localStorage).get("3")
$(".time-block").val(localStorage).get("4")
$(".time-block").val(localStorage).get("5")

});