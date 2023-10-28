// Used to toggle the menu on small screens when clicking on the menu button


function navFunction() {
    var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else { 
            x.className = x.className.replace(" w3-show", "");
        }
    }


// images_dir = readdirSync('./public/galleries/')
// images_dir = images_dir.filter((item) => item != '.DS_Store')
// videos_dir = readdirSync('./public/videos/')
// videos_dir = videos_dir.filter((item) => item != '.DS_Store')
