let imageIndex = 0;
let imageLinks = ['rabbit.jpg', 'panda.jpg', 'bird.jpg'];
let image = document.querySelector('.image');

function prevImage() {
    if (imageIndex > 0) {
        imageIndex--;
        image.src = imageLinks[imageIndex];
    }
    
}

function nextImage() {
    if (imageIndex < imageLinks.length - 1) {
        imageIndex++;
        image.src = imageLinks[imageIndex];
    }
}

function keyup(event) {
    if (event.key === 'ArrowLeft') {
        // console.log(event.key);
        prevImage();
    }
    else if (event.key === 'ArrowRight') {
        // console.log(event.key);
        nextImage();
    }
}

document.addEventListener('keyup', keyup);