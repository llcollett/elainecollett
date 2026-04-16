
let currentSize = 1;
const sizes = ["gallery-image", "gallery-image-large"];
function toggleSize() {
    if(currentSize >= sizes.length) {
        currentSize = 0;
    }
    document.getElementById("gallery-image-id").setAttribute("class", sizes[currentSize]);
    currentSize++;
}