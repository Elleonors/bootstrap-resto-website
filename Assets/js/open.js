
(function() {

    var months = new Array(); months[0]="Janvier"; months[1]="Février"; months[2]="Mars"; months[3]="Avril"; months[4]="Mai"; months[5]="Juin"; months[6]="Juillet"; months[7]="Août"; months[8]="Septembre"; months[9]="Octobre"; months[10]="Novembre"; months[11]="Décembre";
    var days = new Array(); days[0]="Dimanche"; days[1]="Lundi"; days[2]="Mardi"; days[3]="Mercredi"; days[4]="Jeudi"; days[5]="Vendredi"; days[6]="Samedi";
    
    var d = new Date();
    var month = months[d.getMonth()];
    var day = days[d.getDay()];
    var date = d.getDate();
    var year = d.getFullYear();
    var h = d.getHours();
    var m = d.getMinutes();
    var openclosed ="";


  if ((h >= 12) && (h <= 22) && (day != 1) && (h != 14) && (h != 15) && (h != 16) && (h != 17)) {
    openclosed = "nous sommes ouverts !";
  } else {
    openclosed = "Désolé , nous sommes fermés";
  };


  document.getElementById("message").innerHTML = "Nous sommes le " + day + " " + date + " " + month + " " + year +", et " + openclosed



})();
