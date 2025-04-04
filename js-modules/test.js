import { checkAdminStatus } from "./login.js";

// the only reason this exists is because of timing issues 
export function testTiming() {
  document.addEventListener("DOMContentLoaded", () => {
      const adminSettings = document.querySelector(".admin-setting");
      const settingDiv = document.querySelector(".setting-div");

      if (!adminSettings || !settingDiv) return; // Prevent null errors

      // Call checkAdminStatus only when clicking on settings
      adminSettings.addEventListener('click', () => {
          checkAdminStatus(); // Ensure admin status is updated only when necessary

          if (settingDiv.innerHTML.trim() !== "") {
              settingDiv.innerHTML = "";
          } else {
              settingDiv.innerHTML = `
                  <p><a class="add-products search-suggestions" href="/htmls/addproducts.html">+ Add Products</a></p>
                  <p><a class="log-out search-suggestions">Log Out</a></p>
              `;
          }
      });

      document.addEventListener("click", (e) => {
          if (e.target.classList.contains("log-out")) {
              console.log("Logging Out...");
              localStorage.removeItem("currentUser");
              window.location.href = "login.html";
          }
      });
  });
}
