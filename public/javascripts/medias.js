import media from "../data/media.json" assert {type: 'json'};

// Videos
var vid = document.getElementById("mosaic_vid");
const vid_rows = vid.getElementsByClassName("row-img");
const npcol_vid =  Math.ceil(media["videos"].length/2)

media["videos"].slice(0, npcol_vid).forEach(function (object) {
    var div = document.createElement('div');
    div.classList.add("column-vid")
    div.innerHTML = '<video class="center" type="video/mp4" controls><source src=videos/' +  object.name  + ' type="video/mp4"></video>' 
    vid_rows[0].appendChild(div);
});

media["videos"].slice(npcol_vid, 2*npcol_vid).forEach(function (object) {
    var div = document.createElement('div');
    div.classList.add("column-vid")
    div.innerHTML = '<video class="center" type="video/mp4" controls><source src=videos/' +  object.name  + ' type="video/mp4"></video>' 
    vid_rows[0].appendChild(div);
});

// Images
var images = document.getElementById("mosaic");
const img_rows = images.getElementsByClassName("row-img");
const npcol =  Math.ceil(media["images"].length/4)

media["images"].slice(0, npcol).forEach(function (object) {
    var div = document.createElement('p');
    div.classList.add("column-img")
    div.innerHTML = '<img src=galleries/' +  object.name  + ' loading="lazy">' 
    img_rows[0].appendChild(div);
});

media["images"].slice(npcol, 2*npcol).forEach(function (object) {
    var div = document.createElement('p');
    div.classList.add("column-img")
    div.innerHTML = '<img src=galleries/' +  object.name  + ' loading="lazy">' 
    img_rows[0].appendChild(div);
});

media["images"].slice(2*npcol, 3*npcol).forEach(function (object) {
    var div = document.createElement('p');
    div.classList.add("column-img")
    div.innerHTML = '<img src=galleries/' +  object.name  + ' loading="lazy">' 
    img_rows[0].appendChild(div);
});

media["images"].slice(3*npcol, 4*npcol).forEach(function (object) {
    var div = document.createElement('p');
    div.classList.add("column-img")
    div.innerHTML = '<img src=galleries/' +  object.name  + ' loading="lazy">' 
    img_rows[0].appendChild(div);
});