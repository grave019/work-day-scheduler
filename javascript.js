$(document).ready(function () {
    //displays current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //Assign saveBtn click listener 
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, text);
    })
//load any saved data from LocalStorage - do this for each hour created.
$("#hour7 .description").val(localStorage.getItem("hour7"));
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));

function hourTracker() {
    //get current number of hours.
    let currentHour = moment().hour();
    // loop over time blocks
    $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log( blockHour, currentHour)
    //check to see if we move past the time on the planner
    if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    } 
    })
}
    hourTracker();
})