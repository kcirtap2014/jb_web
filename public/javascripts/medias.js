import media from "../data/media.json" assert {type: 'json'};

// Videos
var vid = document.getElementById("mosaic_vid");
const vid_rows = vid.getElementsByClassName("row-img");
const npcol_vid =  Math.ceil(media["videos"].length/2)

var div1 = document.createElement('div');
div1.classList.add("column-vid")
media["videos"].slice(0, npcol_vid).forEach(function (object) {
    div1.innerHTML += '<video class="center" type="video/mp4" controls><source src=videos/' +  object.name  + ' type="video/mp4"></video>' 
    vid_rows[0].appendChild(div1);
});

var div2 = document.createElement('div');
div2.classList.add("column-vid")
media["videos"].slice(npcol_vid, 2*npcol_vid).forEach(function (object) {
    div2.innerHTML += '<video class="center" type="video/mp4" controls><source src=videos/' +  object.name  + ' type="video/mp4"></video>' 
    vid_rows[0].appendChild(div2);
});

// Images
var images = document.getElementById("mosaic");
const img_rows = images.getElementsByClassName("row-img");
const npcol =  Math.ceil(media["images"].length/4)

var div3 = document.createElement('div');
div3.classList.add("column-img")
media["images"].slice(0, npcol).forEach(function (object) {
    div3.innerHTML += '<img src=galleries/' +  object.name  + ' loading="lazy">' 
    img_rows[0].appendChild(div3);
});

var div4 = document.createElement('div');
div4.classList.add("column-img")
media["images"].slice(npcol, 2*npcol).forEach(function (object) {
    
    div4.innerHTML += '<img src=galleries/' +  object.name  + ' loading="lazy">' 
    img_rows[0].appendChild(div4);
});

var div5 = document.createElement('div');
div5.classList.add("column-img")
media["images"].slice(2*npcol, 3*npcol).forEach(function (object) {
    div5.innerHTML += '<img src=galleries/' +  object.name  + ' loading="lazy">' 
    img_rows[0].appendChild(div5);
});

var div6 = document.createElement('div');
div6.classList.add("column-img")
media["images"].slice(3*npcol, 4*npcol).forEach(function (object) {
    div6.innerHTML += '<img src=galleries/' +  object.name  + ' loading="lazy">' 
    img_rows[0].appendChild(div6);
});