function toggleMenu() {
    let menu = document.getElementById("teamsMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Sluit het menu als je ergens anders klikt
document.addEventListener("click", function(event) {
    let menu = document.getElementById("teamsMenu");
    let button = document.querySelector(".teams-button");
    if (!menu.contains(event.target) && event.target !== button) {
        menu.style.display = "none";
    }
});

let isShirtMode = true;

function changeImages() {
    if (isShirtMode) {
        // Verander naar truien
        document.getElementById("image/fotos gamejam/100MSDCF/DSC00018.JPG").src = "trui1.jpg";
        document.getElementById("image/fotos gamejam/100MSDCF/DSC00011.JPG").src = "trui2.jpg";
        document.getElementById("image/fotos gamejam/100MSDCF/DSC00023.JPG").src = "trui3.jpg";
        
        // Verplaats pijl naar links
        document.getElementById("leftBtn").innerText = "<";
        document.getElementById("rightBtn").innerText = "";
    } else {
        // Verander naar shirts
        document.getElementById("image/fotos gamejam/100MSDCF/DSC00026.JPG").src = "shirt1.jpg";
        document.getElementById("image/fotos gamejam/DSC00035.JPG").src = "shirt2.jpg";
        document.getElementById("image/fotos gamejam/DSC00027.JPG").src = "shirt3.jpg";
        
        // Verplaats pijl naar rechts
        document.getElementById("leftBtn").innerText = "";
        document.getElementById("rightBtn").innerText = ">";
    }

    isShirtMode = !isShirtMode;
}

// document.addEventListener("DOMContentLoaded", function() {
//     const videoContainer = document.getElementById("videoContainer");

//     // Maak een video-element
//     const video = document.createElement("video");
//     video.src = "image/trailer.mp4"; // Zet hier je videobestand
//     video.autoplay = true;
//     video.loop = true;
//     video.muted = true; // Zet op false als je geluid wilt
//     video.id = "bgVideo";

//     // Voeg de video toe aan de container
//     videoContainer.appendChild(video);

//     // Zorg ervoor dat de video nooit stopt
//     video.addEventListener("pause", function() {
//         this.play();
//     });
// });
