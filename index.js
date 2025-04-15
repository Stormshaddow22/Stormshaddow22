const pages = [
    { name: "Home", url: "https://stormshaddow22.github.io/Stormshaddow22/index.html" },
    { name: "Google QR", url: "https://stormshaddow22.github.io/Stormshaddow22/Buisness%20review%20QR%20generator.html" },
    { name: "QRcreator", url: "https://stormshaddow22.github.io/Stormshaddow22/QRcreator.html" },
    { name: "All Calc", url: "https://stormshaddow22.github.io/Stormshaddow22/Allcalc2.0.html" },
    { name: "Call Que 1", url: "https://stormshaddow22.github.io/Stormshaddow22/Call%20Ques.html" },
    { name: "Call Que 2", url: "https://stormshaddow22.github.io/Stormshaddow22/screen.html" },
    { name: "CSUK MTD", url: "https://stormshaddow22.github.io/Stormshaddow22/CSUKMTDSTATS.html" },
    { name: "Incentive Calc", url: "https://stormshaddow22.github.io/Stormshaddow22/PayoutCalculator-2.0.html" },
    { name: "Logout", <button onclick="localStorage.removeItem('authenticated'); location.href='index.html';">
  Logout
</button> }
];

// Create menu dynamically
document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuButton = document.createElement("button");
    menuButton.classList.add("menu-button");
    menuButton.innerHTML = "&#9776;"; // ☰ button

    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown-content");
    dropdown.style.display = "none";

    pages.forEach(page => {
        let link = document.createElement("a");
        link.href = page.url;
        link.innerText = page.name;
        dropdown.appendChild(link);
    });

    menuButton.addEventListener("click", function () {
        dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    });

    menuContainer.appendChild(menuButton);
    menuContainer.appendChild(dropdown);
    document.body.appendChild(menuContainer);
});

