function getSituation() {
    var situation = document.getElementById("situation").value;
    getPerfectlyLegitimateReason(situation);
}

function getPerfectlyLegitimateReason(situation) {
    $.getJSON("https://raw.githubusercontent.com/mar-schmidt/needareason.github.io/master/reasons.json", function(json) {
        if (json != null) {
            var excuse = json.reasons[Math.floor(Math.random() * json.reasons.length)];
            postExcuse(situation, excuse);
        }
    }); 
}

function postExcuse(situation, excuse) {
    document.getElementById("excuse").innerHTML = situation + " " + excuse;
}