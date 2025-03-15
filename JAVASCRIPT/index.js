const navBar = document.getElementById("navBAR");
const gui = document.getElementById("GUI");

function showNavBar() {
  if (navBar) {
    navBar.classList.toggle("responsive_nav");
  }

  if (
    navBar.classList.contains("responsive_nav") &&
    window.matchMedia("(max-width: 1024px)").matches
  ) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}
function isLaptop() {
  return (
    screen.width > 1024 &&
    !("ontouchstart" in window) &&
    /Windows|Macintosh|Linux/i.test(navigator.userAgent)
  );
}

function detectOS() {
  let platform = navigator.platform.toLowerCase();
  if (platform.includes("win")) return "Windows";
  if (platform.includes("mac")) return "Mac";
  if (platform.includes("linux")) return "Linux";
  return "Unknown";
}

function installPythonGui() {
  if (isLaptop()) {
    let os = detectOS();
    let downloadUrl = "";

    if (os === "Windows") {
      downloadUrl =
        "https://github.com/DeboAdeniran/WeatherAPI.py/releases/download/WeatherApi.exe/weatherAPI.exe";
    } else if (os === "Mac") {
      downloadUrl = ""; // Add Mac download link if available
    } else if (os === "Linux") {
      downloadUrl = ""; // Add Linux download link if available
    }

    if (downloadUrl) {
      window.location.href = downloadUrl;
    } else {
      alert("Download not available for your OS.");
    }
  }
}
