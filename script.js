var gallery_images = [
    '<img src="placeholder_image.png">',
    '<img src="placeholder_image_2.png">',
    '<img src="placeholder_image_3.png">',
    '<img src="placeholder_image.png">',
    '<img src="placeholder_image_2.png">',
    '<img src="placeholder_image_3.png">',
    '<img src="placeholder_image.png">',
    '<img src="placeholder_image_2.png">',
    '<img src="placeholder_image_3.png">'
]

let current_image = gallery_images[0];

function view_gallery(clicked_image) {
    document.getElementById("gallery_view").style.visibility = 'visible';

    // set current image
    current_image = clicked_image;
    document.getElementById("current_image").innerHTML = gallery_images[current_image];
}

function forward() {
    current_image++;
    if (current_image > 8) {
        current_image = 0;
    }
    document.getElementById("current_image").innerHTML = gallery_images[current_image];
    console.log('foward');
    console.log(`current image = ${current_image}`)
}

function back() {
    current_image -= 1;
    if (current_image < 0) {
        current_image = 8
    }
    document.getElementById("current_image").innerHTML = gallery_images[current_image];
    console.log('back');
    console.log(`current image = ${current_image}`)
}

function exit_gallery() {
    document.getElementById("gallery_view").style.visibility = 'hidden';
}