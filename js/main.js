function getExcuse() {
    var inputVal = document.getElementById("excuse").value;
    document.getElementById("reason").innerHTML = inputVal + " " + getPerfectlyLegitimateReason();
}

function getPerfectlyLegitimateReason() {
    $.getJSON("https://raw.githubusercontent.com/mar-schmidt/needareason.github.io/master/reasons.json", function(json) {
        return json.reasons[Math.floor(Math.random() * json.reasons.length)];
    }); 
}
