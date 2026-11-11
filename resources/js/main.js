/* image size script*/
let currentSize = 1;
const sizes = ["gallery-image", "gallery-image-large"];
function toggleSize() {
    if(currentSize >= sizes.length) {
        currentSize = 0;
    }
    document.getElementById("gallery-image-id").setAttribute("class", sizes[currentSize]);
    currentSize++;
}


/* back to top button script */
let mybutton = document.getElementById("top-button");

/* when the user scrolls down 50px from top, show the button */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

/* when the user clicks the button, go to top */
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}