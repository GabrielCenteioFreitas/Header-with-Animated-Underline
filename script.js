const underline = document.getElementById("underline")

const items = document.querySelectorAll(".item")

function moveUnderline(item) {
    underline.style.left = item.offsetLeft + "px";
    underline.style.width = item.clientWidth + "px";
}

const home = document.getElementById("home")
var item_atual = home;
moveUnderline(item_atual);

for (const item of items) {
    item.addEventListener('click', function() {
        moveUnderline(this);
        item_atual = this;
    });
}

window.addEventListener('resize', function() {
    moveUnderline(item_atual)
    }
)