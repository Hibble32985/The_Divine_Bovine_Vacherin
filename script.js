document.addEventListener("DOMContentLoaded", function() {
    var currentDate = dayjs().format("YYYY-MM-DD");
    var currentTime = dayjs().format("HH:mm");
    var timeBlocks = document.querySelectorAll(".time-block");
  
    timeBlocks.forEach(function(timeBlocks) {
      var hour = timeBlocks.querySelector(".hour").textContent;
  
      if (dayjs(currentDate + " " + hour, "YYYY-MM-DD HH A").isBefore(dayjs(currentDate + " " + currentTime, "YYYY-MM-DD HH:mm"))) {
        timeBlocks.classList.add("past");
      } else if (dayjs(currentDate + " " + hour, "YYYY-MM-DD HH A").isSame(dayjs(currentDate + " " + currentTime, "YYYY-MM-DD HH:mm"))) {
        timeBlocks.classList.add("present");
      } else {
        timeBlock.classList.add("future");
      }
    });
  
    var saveButtons = document.querySelectorAll(".save-btn");
    saveButtons.forEach(function(saveButton) {
      saveButton.addEventListener("click", function() {
        var description = this.previousElementSibling.value;
        var hour = this.parentElement.querySelector(".hour").textContent;
        localStorage.setItem(hour, description);
      });
    });
    timeBlocks.forEach(function(timeBlocks) {
        var hour = timeBlocks.querySelector(".hour").textContent;
        var description = localStorage.getItem(".hour");
        if (description) {
          timeBlocks.querySelector(".description").value = description;
        }
      });
