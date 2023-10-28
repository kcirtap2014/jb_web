import dates from "../data/dates.json" assert {type: 'json'};

var table = document.querySelector("table");
const tbodies = table.getElementsByTagName("tbody");
const currentDate = new Date()
dates["dates"].forEach(function (object) {
    var tr = document.createElement('tr');
    var a = moment.locale("fr");

    tr.innerHTML = '<td class="w3-center">' + moment(object.date).format("LL") + '</td>' +
        '<td class="w3-center">' + object.hour + 'h</td>'

    if (currentDate > Date.parse(object.date)) {
        tr.innerHTML += '<td class="w3-center"><a href="' + object.link + '"target="_blank" style="text-decoration:none">' + object.venue + '</a>' +
            '<span class="w3-tag w3-red w3-margin-left">Passé</span></td>'
    } else {
        tr.innerHTML += '<td class="w3-center"><a href="' + object.link + '"target="_blank" style="text-decoration:none">' + object.venue + '</a></td>'
    }
    tbodies[0].appendChild(tr);
});