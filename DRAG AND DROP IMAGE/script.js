const boxes = document.querySelectorAll(".box");
const image = document.querySelector(".image");

image.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
});

boxes.forEach((box) => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
        box.classList.add("h");
    });

    box.addEventListener("dragleave", () => {
        box.classList.remove("h");
    });

    box.addEventListener("drop", (e) => {
        e.preventDefault();
        const draggedElementId = e.dataTransfer.getData("text/plain");
        const draggedElement = document.getElementById(draggedElementId);
        box.appendChild(image);
        box.classList.remove("h");
        box.classList.add("imageh");
    });
});