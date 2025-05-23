const pages = [
  { name: "Home", url: "https://stormshaddow22.github.io/Stormshaddow22/index.html" },
  { name: "Download Google QR", url: "https://stormshaddow22.github.io/Stormshaddow22/Buisness%20review%20QR%20generator.html", download: true },
  { name: "QRcreator", url: "https://stormshaddow22.github.io/Stormshaddow22/QRcreator.html" },
  { name: "All Calc", url: "https://stormshaddow22.github.io/Stormshaddow22/Allcalc2.0.html" },
  { name: "Call Que 1", url: "https://stormshaddow22.github.io/Stormshaddow22/Call%20Ques.html" },
  { name: "Call Que 2", url: "https://stormshaddow22.github.io/Stormshaddow22/screen.html" },
  { name: "CSUK MTD", url: "https://stormshaddow22.github.io/Stormshaddow22/CSUKMTDSTATS.html" },
  { name: "Incentive Calc", url: "https://stormshaddow22.github.io/Stormshaddow22/PayoutCalculator-2.0.html" },
  { name: "Resize image", url: "https://stormshaddow22.github.io/Stormshaddow22/ImageSizeReducer.html" },
  { name: "Remove Background", url: "https://www.remove.bg/upload", external: true },
  { name: "Logout", action: "logout" }
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
    if (page.action === "logout") {
      const logoutBtn = document.createElement("button");
      logoutBtn.innerText = page.name;
      logoutBtn.onclick = function () {
        localStorage.removeItem("authenticated");
        location.href = "index.html";
      };

      // Style the logout button
      logoutBtn.style.backgroundColor = "#ff4d4d";
      logoutBtn.style.color = "#fff";
      logoutBtn.style.fontWeight = "bold";
      logoutBtn.style.border = "none";
      logoutBtn.style.padding = "10px";
      logoutBtn.style.marginTop = "10px";
      logoutBtn.style.cursor = "pointer";
      logoutBtn.style.width = "100%";
      logoutBtn.style.textAlign = "left";

      dropdown.appendChild(logoutBtn);
    } else {
     const link = document.createElement("a");
link.innerText = page.name;

if (page.external) {
  link.href = page.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
} else {
  link.href = page.url;
}


      // If download is set, apply download attribute
      if (page.download) {
        const filename = page.url.split("/").pop(); // extract file name from URL
        link.setAttribute("download", filename);
      }

      dropdown.appendChild(link);
    }
  });

  menuButton.addEventListener("click", function () {
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
  });

  menuContainer.appendChild(menuButton);
  menuContainer.appendChild(dropdown);
  document.body.appendChild(menuContainer);
});
