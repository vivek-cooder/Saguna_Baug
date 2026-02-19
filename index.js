window.onload = function () {
    const dateElement = document.getElementById('date-display');
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString(); 
};

document.querySelectorAll("summary").forEach(item => {
  item.addEventListener("click", () => {
    console.log("FAQ toggled:", item.textContent);
  });
});