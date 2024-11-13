
function closePopupAfterClick() {
document.getElementById("popupForm").style.display = "none";
document.getElementById("overlay").style.display = "none";
}

document.querySelector("#popupForm button").addEventListener("click", closePopupAfterClick);
