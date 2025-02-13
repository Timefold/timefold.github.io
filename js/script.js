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

function changeImages() {
    if (isShirtMode) {
        // Verander naar truien
        document.getElementById("img1").src = "image/fotos gamejam/100MSDCF/DSC00026.JPG";
        document.getElementById("img2").src = "image/fotos gamejam/100MSDCF/DSC00035.JPG";
        document.getElementById("img3").src = "image/fotos gamejam/100MSDCF/DSC00027.JPG";

        // Pijl aanpassen
        document.getElementById("leftBtn").innerText = "<";
        document.getElementById("rightBtn").innerText = "";
    } else {
        // Verander naar shirts
        document.getElementById("img1").src = "image/fotos gamejam/100MSDCF/DSC00018.JPG";
        document.getElementById("img2").src = "image/fotos gamejam/100MSDCF/DSC00011.JPG";
        document.getElementById("img3").src = "image/fotos gamejam/100MSDCF/DSC00023.JPG";

        // Pijl aanpassen
        document.getElementById("leftBtn").innerText = "";
        document.getElementById("rightBtn").innerText = ">";

        document.getElementById("leftBtn").addEventListener("click", changeImages);
        document.getElementById("rightBtn").addEventListener("click", changeImages);
    }
    
    isShirtMode = !isShirtMode;
}

let isShirtMode = true;

