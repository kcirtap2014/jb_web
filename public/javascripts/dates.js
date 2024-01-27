const dates = {
    "dates": [{
        "date": "2023-02-04",
        "hour": "19",
        "minute": "30",
        "venue": "Improvibar",
        "link": "https://www.facebook.com/improvibar/"
        }, {
            "date": "2023-04-27",
            "hour": "21",
            "minute": "30",
            "venue": "Improvibar",
            "link": "https://www.facebook.com/improvibar/"
        }, {
            "date": "2023-06-11",
            "hour": "20",
            "minute": "00",
            "venue": "Improvibar",
            "link": "https://www.facebook.com/improvibar/"
        }, {
            "date": "2023-07-01",
            "hour": "19",
            "minute": "30",
            "venue": "Improvibar",
            "link": "https://www.facebook.com/improvibar/"
        }, {
            "date": "2023-09-09",
            "hour": "18",
            "minute": "00",
            "venue": "Improvibar",
            "link": "https://www.facebook.com/improvibar/"
        }, {
            "date": "2023-10-14",
            "hour": "18",
            "minute": "00",
            "venue": "Improvibar",
            "link": "https://www.facebook.com/improvibar/"
        }, {
            "date": "2023-11-11",
            "hour": "18",
            "minute": "00",
            "venue": "Improvibar",
            "link": "https://www.facebook.com/improvibar/"
        }, {
            "date": "2023-12-09",
            "hour": "18",
            "minute": "00",
            "venue": "Improvibar",
            "link": "https://www.facebook.com/improvibar/"
        }, {
            "date": "2024-01-20",
            "hour": "21",
            "minute": "00",
            "venue": "Petite Croisée des Chemins",
            "link": "https://www.theatrelacroiseedeschemins.com/billetterie"
        }, {
            "date": "2024-01-21",
            "hour": "17",
            "minute": "00",
            "venue": "Petite Croisée des Chemins",
            "link": "https://www.theatrelacroiseedeschemins.com/billetterie"
        }, {
            "date": "2024-01-27",
            "hour": "21",
            "minute": "00",
            "venue": "Petite Croisée des Chemins",
            "link": "https://www.theatrelacroiseedeschemins.com/billetterie"
        }, {
            "date": "2024-01-28",
            "hour": "17",
            "minute": "00",
            "venue": "Petite Croisée des Chemins",
            "link": "https://www.theatrelacroiseedeschemins.com/billetterie"
        }, {
            "date": "2024-02-03",
            "hour": "21",
            "minute": "00",
            "venue": "Petite Croisée des Chemins",
            "link": "https://www.theatrelacroiseedeschemins.com/billetterie"
        },
        {
            "date": "2024-02-04",
            "hour": "17",
            "minute": "00",
            "venue": "Petite Croisée des Chemins",
            "link": "https://www.theatrelacroiseedeschemins.com/billetterie"
        },
        {
            "date": "2024-02-10",
            "hour": "21",
            "minute": "00",
            "venue": "Petite Croisée des Chemins",
            "link": "https://www.theatrelacroiseedeschemins.com/billetterie"
        },
        {
            "date": "2024-02-11",
            "hour": "17",
            "minute": "00",
            "venue": "Petite Croisée des Chemins",
            "link": "https://www.theatrelacroiseedeschemins.com/billetterie"
        },
        {
            "date": "2024-02-17",
            "hour": "21",
            "minute": "00",
            "venue": "Petite Croisée des Chemins",
            "link": "https://www.theatrelacroiseedeschemins.com/billetterie"
        },
        {
            "date": "2024-02-18",
            "hour": "17",
            "minute": "00",
            "venue": "Petite Croisée des Chemins",
            "link": "https://www.theatrelacroiseedeschemins.com/billetterie"
        },
        {
            "date": "2024-02-24",
            "hour": "21",
            "minute": "00",
            "venue": "Petite Croisée des Chemins",
            "link": "https://www.theatrelacroiseedeschemins.com/billetterie"
        }, {
            "date": "2024-02-25",
            "hour": "17",
            "minute": "00",
            "venue": "Petite Croisée des Chemins",
            "link": "https://www.theatrelacroiseedeschemins.com/billetterie"
        }

    ]
}
var table = document.querySelector("table")
const tbodies = table.getElementsByTagName("tbody");
const currentDate = new Date()

dates["dates"].forEach(function (object) {
    var tr = document.createElement('tr');
    var a = moment.locale("fr");

    tr.innerHTML = '<td class="w3-center">' + moment(object.date).format("L") + '</td>' +
        '<td class="w3-center">' + object.hour + 'h' + object.minute + '</td>'
    // only consider over when it's been an hour since the show started
    var object_date = Date.parse(object.date +" "+  String(parseInt(object.hour)+1) + ':' + object.minute + ":00 GMT+0100")
    if (currentDate > object_date) {
        tr.innerHTML += '<td class="w3-center"><a href="' + object.link + '"target="_blank" style="text-decoration:none">' + object.venue + '</a>' +
            '<span class="w3-tag w3-red w3-margin-left">Passé</span></td>'
    } else {
        tr.innerHTML += '<td class="w3-center"><a href="' + object.link + '"target="_blank" style="text-decoration:none">' + object.venue + '</a></td>'
    }
    tbodies[0].appendChild(tr);
});