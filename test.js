var currentDay = moment().format("MMMM Do YYYY");
console.log(currentDay);
$("#currentDay").text(currentDay);
// save button
var saveButton = $(".saveBtn");

$(document).ready(function () {

function trial (){
    var currentTime = moment().format("hh")
    console.log(currentTime);
  $("textarea").each(function () {
      console.log('test');
      
    var timeSlot = parseInt($(this).attr("id"));
    
    if (currentTime === timeSlot) {
        $(this).addClass("present");
        
      }
      else if (currentTime < timeSlot){
                $(this).addClass("past");
            }
        else {
                $(this).addClass("future")
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