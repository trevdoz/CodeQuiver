$(".snippets a").on("click", function() {
    if ($(".selected") !== null) {
      $(".selected").removeClass("selected");
    }
    $(this).addClass("selected");
  });

// Get the modal
var modal = $("#myModal");

// Get the button that opens the modal
var btn = $(".quivers .fa-plus-circle");


// When the user clicks the button, open the modal 
btn.on("click", function() {
  modal.css("display", "block");
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}