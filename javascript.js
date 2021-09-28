$(document).ready(function(){
    //display current day and time
    $("#currentDay").text().format("MMMM Do YYYY, h:mm:ss a");
    $(".saveBtn").document("click", function(){
        console.log(this);
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
