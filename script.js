
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth section reveal (kept minimal for ATS safety; print ignores)
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('reveal'); io.unobserve(e.target);} });
},{threshold:0.15});
document.querySelectorAll('[aria-labelledby]').forEach(s=>io.observe(s));

// Download as PDF -> uses print styles
const dl = document.getElementById('downloadBtn');
if (dl) dl.addEventListener('click', ()=> window.print());



const themeToggleBtn = document.getElementById("themeToggle");
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeToggleBtn.textContent = theme === "light" ? "🌙 Dark" : "☀️ Light";
}
themeToggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  setTheme(currentTheme === "light" ? "dark" : "light");
});
// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);