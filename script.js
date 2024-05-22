const list = document.querySelectorAll(".list");

function activeLink(){
    list.forEach((item) =>
    item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) =>
item.addEventListener("mouseover", activeLink));

document.querySelectorAll(".list").forEach((item) => {
    item.addEventListener("mouseout", () => {
        item.classList.remove("active");
    });
});

document.getElementById('lineicon').addEventListener('click', function() {
    var menu = document.querySelector('.navigation ul');
    menu.classList.toggle('show');
});