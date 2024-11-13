// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("enviarBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// When the user submits the form, show an alert
var form = document.getElementById("yourFormId"); // Replace with your form's actual ID
form.onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Dados preenchidos com sucesso!");
    modal.style.display = "none"; // Optionally close the modal after submission
    form.reset(); // Optionally reset the form after submission
}