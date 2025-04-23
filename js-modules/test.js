import { checkAdminStatus } from "./login.js";


export function testTiming() {
  document.addEventListener("DOMContentLoaded", () => {
      const adminSettings = document.querySelector(".admin-setting");
      const settingDiv = document.querySelector(".setting-div");

      if (!adminSettings || !settingDiv) return; 

      
      adminSettings.addEventListener('click', () => {
          checkAdminStatus(); 

          if (settingDiv.innerHTML.trim() !== "") {
              settingDiv.innerHTML = "";
              settingDiv.style.display="none";
          } else {
            settingDiv.style.display="block`";
              settingDiv.innerHTML = `
                  <p><a class="add-products search-suggestions" href="/htmls/addproducts.html">+ Add Products</a></p>
                  <p><a class="log-out  search-suggestions">Log Out</a></p>
              `;
          }
      });

      document.addEventListener("click", (e) => {
          if (e.target.classList.contains("log-out")) {
              console.log("Logging Out...");
              localStorage.removeItem("currentUser");
              window.location.href = "/htmls/login.html";
          }
      });
  });
}
