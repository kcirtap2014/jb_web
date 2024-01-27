const media = {
    "images": [
        
        {
            "name": "1guy.jpeg",
            "alt":"On part dans l'espace avec un invité qui a beaucoup d'imagination. #imagination #espace"
        },
        {
            "name": "1lady.jpeg",
            "alt":"Moment de partage, entretien, questions, première partie du spectacle. #julienbertrand"
        },
        {
            "name": "IMG_20231111_191318.jpg",
            "alt": "Super moment d'impro avec l'invitée canadienne. #supermoment"
        },
        {
            "name": "2ladies.jpeg",
            "alt":"Scènes avec 2 femmes"
        },  
        {
            "name": "1678139077343.jpg",
            "alt": "Voilà, ce string te va parfaitement ! #impro"
        },
       
        {
            "name": "1678139077838.jpg",
            "alt": "Faisons d'abord connaissance et après on improvise! #julien+1 #rire"
        },
        
        {
            "name": "1696761276217.jpg",
            "alt": "De quoi vous parlez? #comedien #improvisateur"
        },
        {
            "name": "1696761635178.jpg",
            "alt": "Merci à cet invité qui a eu le courage de monter sur scène pour improviser avec moi, sa sincérité nous a permis de créer de belles histoires. #bellehistoire"
        },
       
        {
            "name": "1696761635316.jpg",
            "alt": "Moment de partage, entretien, questions, première partie du spectacle. #julienbertrand"
        },
        {
            "name": "1696761635327.jpg",
            "alt": "Qu'est-ce qu'on mange? Scène improvisée avec une invitée très participative et créative. #créativité #fun"
        },
        {
            "name": "1696761635194.jpg",
            "alt": "Les deux invités qui sont montés sur scène pour participer à Julien+1. Belle histoire, touchante et inattendue. #comedien #improvisateur"
        }, {
            "name": "IMG_20231111_191303.jpg",
            "alt": "Scène improvisée avec une invitée très participative et créative. #créativité #fun"
        }// ,
        
        // {
        //     "name": "IMG-20231112-WA0000.jpg",
        //     "alt": "Julien et son invitée sur scène. #julien+1"
        // }
    ],
    "videos": [
        {
            "name": "https://www.youtube.com/embed/yOYKf96VCjE", 
            "alt": "interview after show Julien+1"
        },
        {
            "name": "https://www.youtube.com/embed/6PnFvyKiC-E", 
            "alt": "interview after show Julien+1"
        },
        {
            "name": "https://www.youtube.com/embed/dzq8rxm5mFA", 
            "alt": "interview after show Julien+1"
        },
       
        {
            "name": "https://www.youtube.com/embed/3EfC_dQBPmM", 
            "alt": "interview after show Julien+1"
        },
        
       
        {
            "name": "https://www.youtube.com/embed/Z4k1S9zELDw", 
            "alt": "interview after show Julien+1"
        },
      
        {
            "name": "https://www.youtube.com/embed/zDrBaRSKDOI", 
            "alt": "interview after show Julien+1"
        },
    ]
}

// Videos
var vid = document.getElementById("mosaic_vid");

if (vid!==null){
    const vid_rows = vid.getElementsByClassName("row-img");
    const npcol_vid = Math.ceil(media["videos"].length / 4)
    var div1 = document.createElement('div');
    div1.classList.add("column-vid")
    media["videos"].slice(0, npcol_vid).forEach(function (object) {
        div1.innerHTML += '<iframe  class=center-vid  src=' + object.name + '?controls=1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media;gyroscope; picture-in-picture;web-share" allowfullscreen alt="' + object.alt + '">'
        vid_rows[0].appendChild(div1);
    });

    var div2 = document.createElement('div');
    div2.classList.add("column-vid")
    media["videos"].slice(npcol_vid, 2 * npcol_vid).forEach(function (object) {
        div2.innerHTML += '<iframe class=center-vid  src=' + object.name + '?controls=1 frameborder="0" allow="accelerometer; clipboard-write; encrypted-media;gyroscope; picture-in-picture;web-share" allowfullscreen  alt="' + object.alt + '">'
        vid_rows[0].appendChild(div2);
    });

    var div3 = document.createElement('div');
    div3.classList.add("column-vid")
    media["videos"].slice(2 * npcol_vid, 3 * npcol_vid).forEach(function (object) {
        div3.innerHTML += '<iframe  class=center-vid  src=' + object.name + '?controls=1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media;gyroscope; picture-in-picture;web-share" allowfullscreen alt="' + object.alt + '">'
        vid_rows[0].appendChild(div3);
    });

    var div4 = document.createElement('div');
    div4.classList.add("column-vid")
    media["videos"].slice(3 * npcol_vid, 4 * npcol_vid).forEach(function (object) {
        div4.innerHTML += '<iframe class=center-vid  src=' + object.name + '?controls=1 frameborder="0" allow="accelerometer; clipboard-write; encrypted-media;gyroscope; picture-in-picture;web-share" allowfullscreen  alt="' + object.alt + '">'
        vid_rows[0].appendChild(div4);
    });
}
// Images
var images = document.getElementById("mosaic");
if (images!==null){
    const img_rows = images.getElementsByClassName("row-img");
    const npcol = Math.ceil(media["images"].length / 4)

    var div3 = document.createElement('div');
    div3.classList.add("column-img")
    media["images"].slice(0, npcol).forEach(function (object) {
        div3.innerHTML += '<img src=./public/galleries/' + object.name + ' loading="lazy" alt="' + object.alt + '">'
        img_rows[0].appendChild(div3);
    });

    var div4 = document.createElement('div');
    div4.classList.add("column-img")
    media["images"].slice(npcol, 2 * npcol+1).forEach(function (object) {

        div4.innerHTML += '<img src=./public/galleries/' + object.name + ' loading="lazy" alt="' + object.alt + '">'
        img_rows[0].appendChild(div4);
    });

    var div5 = document.createElement('div');

    div5.classList.add("column-img")
    media["images"].slice(2 * npcol+1, 3 * npcol+1).forEach(function (object) {
        div5.innerHTML += '<img src=./public/galleries/' + object.name + ' loading="lazy" alt="' + object.alt + '">'
        img_rows[0].appendChild(div5);
    });

    var div6 = document.createElement('div');
    div6.classList.add("column-img")
    media["images"].slice(3 * npcol+1, 4 * npcol).forEach(function (object) {
        div6.innerHTML += '<img src=./public/galleries/' + object.name + ' loading="lazy" alt="' + object.alt + '">'
        img_rows[0].appendChild(div6);
    });

    
}