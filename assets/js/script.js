
function getYear() {
    let currentYear = new Date().getFullYear();
    let title = document.getElementById("copyright");
    title.innerHTML = `©${currentYear} Oliver William Lundvald Christensen`;
}