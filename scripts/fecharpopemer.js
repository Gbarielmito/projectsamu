function openPopup() {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}


function closePopup() {
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


function openVerificationPopup() {
    document.getElementById("verificationPopup").style.display = "block";
    document.getElementById("overlayVerification").style.display = "block";
}


function closeVerificationPopup() {
    document.getElementById("verificationPopup").style.display = "none";
    document.getElementById("overlayVerification").style.display = "none";
}

function closeVerificationPopup(event) {
    if (event) {
        event.preventDefault();
    }
    var verificationPopup = document.getElementById("verificationPopup");
    var overlayVerification = document.getElementById("overlayVerification");

    if (verificationPopup) {
        verificationPopup.style.display = "none";
    } else {
        console.error("Element with ID 'verificationPopup' not found.");
    }

    if (overlayVerification) {
        overlayVerification.style.display = "none";
    } else {
        console.error("Element with ID 'overlayVerification' not found.");
    }
}