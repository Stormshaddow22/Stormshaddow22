// Updated dropdown menu script with purple theme styling and UI improvements

const pages = [
  { name: "Home", url: "https://stormshaddow22.github.io/Stormshaddow22/index.html" },
  { name: "Download Google QR", url: "https://stormshaddow22.github.io/Stormshaddow22/Buisness%20review%20QR%20generator.html", download: true },
  { name: "QRcreator", url: "https://stormshaddow22.github.io/Stormshaddow22/QRcreator.html" },
  { name: "All Calc", url: "https://stormshaddow22.github.io/Stormshaddow22/Allcalc2.0.html" },
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
  dropdown.style.position = "absolute";
  dropdown.style.backgroundColor = "rgba(17, 24, 39, 0.7)"; // semi-transparent dark background
  dropdown.style.border = "3px solid #7C3AED";
  dropdown.style.borderRadius = "12px";
  dropdown.style.padding = "10px";
  dropdown.style.zIndex = "1000";
  dropdown.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
  dropdown.style.transition = "opacity 0.2s ease";
  dropdown.style.opacity = "0";
  dropdown.style.backdropFilter = "blur(6px)";

  pages.forEach(page => {
    if (page.action === "logout") {
      const logoutBtn = document.createElement("button");
      logoutBtn.innerText = page.name;
      logoutBtn.onclick = function () {
        localStorage.removeItem("authenticated");
        location.href = "index.html";
      };

      // Styled logout button
      logoutBtn.style.backgroundColor = "#ff4d4d";
      logoutBtn.style.color = "#fff";
      logoutBtn.style.fontWeight = "bold";
      logoutBtn.style.border = "none";
      logoutBtn.style.padding = "10px";
      logoutBtn.style.marginTop = "10px";
      logoutBtn.style.cursor = "pointer";
      logoutBtn.style.width = "100%";
      logoutBtn.style.textAlign = "left";
      logoutBtn.style.borderRadius = "6px";

      logoutBtn.addEventListener("mouseover", () => logoutBtn.style.backgroundColor = "#9333ea");
      logoutBtn.addEventListener("mouseout", () => logoutBtn.style.backgroundColor = "#ff4d4d");

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

      if (page.download) {
        const filename = page.url.split("/").pop();
        link.setAttribute("download", filename);
      }

      // Style for menu items
      link.style.display = "block";
      link.style.color = "#F9FAFB";
      link.style.padding = "8px 10px";
      link.style.textDecoration = "none";
      link.style.borderRadius = "6px";

      link.addEventListener("mouseover", () => link.style.backgroundColor = "#7C3AED");
      link.addEventListener("mouseout", () => link.style.backgroundColor = "transparent");

      dropdown.appendChild(link);
    }
  });

  // Toggle dropdown
  menuButton.addEventListener("click", function (event) {
    event.stopPropagation();
    const isOpen = dropdown.style.display === "block";
    dropdown.style.display = isOpen ? "none" : "block";
    dropdown.style.opacity = isOpen ? "0" : "1";
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!menuContainer.contains(event.target)) {
      dropdown.style.display = "none";
      dropdown.style.opacity = "0";
    }
  });

  menuContainer.appendChild(menuButton);
  menuContainer.appendChild(dropdown);
  document.body.appendChild(menuContainer);
});
