function maPosition(position) {
  var infopos = "Position déterminée :\n";
    infopos += "Latitude : "+position.coords.latitude +"\n";
    infopos += "Longitude: "+position.coords.longitude+"\n";
  document.getElementById("infoposition").innerHTML = infopos;
  var lat1 = +position.coords.latitude ;
  var lon1 = +position.coords.longitude;
  console.log(lat1 + " " + lon1);
  return {
    long: lon1,
    lat: lat1
  }
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(maPosition);
}

function distance(lat1, lon1, lat2, lon2, unit) {
  if ((latdistance1 == lat2) && (lon1 == lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist;
  }
}

function action(paramatredunavigateur){
  let pos = maPosition(paramatredunavigateur)
  let magasins = [
    {
      name: 'binche',
      long: 12,
      lat: 10,
      dist: null
    },{
      name: 'mons',
      long: 14,
      lat: 23,
      dist: null
    },
    {
      name: 'lalouviere',
      long: 45,
      lat: 42,
      dist: null
    }
  ]
  magasins.forEach((magasin)=>{
    magasin.dist = distance(pos.lat, pos.long, magasin.lat, magasin.log, 'K')
  })
  console.log(pos, magasins);
}


document.getElementById("binche").addEventListener("click", function binche() {
  document.getElementById("menu").innerHTML="Binche";
  document.getElementById("maps").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10170.229522512498!2d4.166234!3d50.412086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22135027b4553731!2sSushi+%C3%A0+la+Vie+Binche!5e0!3m2!1sfr!2sbe!4v1550831632394");
  document.getElementById("lundi").innerHTML="BINCHE :Je suis l'horaire du lundi";
  document.getElementById("mardi").innerHTML="BINCHE :Je suis l'horaire du mardi";
  document.getElementById("mercredi").innerHTML="BINCHE :Je suis l'horaire du mercredi";
  document.getElementById("jeudi").innerHTML="BINCHE :Je suis l'horaire du jeudi";
  document.getElementById("vendredi").innerHTML="BINCHE :Je suis l'horaire du vendredi";
  document.getElementById("samedi").innerHTML="BINCHE :Je suis l'horaire du samedi";
  document.getElementById("dimanche").innerHTML="BINCHE :Je suis l'horaire du dimanche";
});
document.getElementById("la-louviere").addEventListener("click", function lalouviere() {
  document.getElementById("menu").innerHTML="La Louvière";
  document.getElementById("maps").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10156.191917845925!2d4.187926!3d50.4774505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8c95cf9a58bfc4c5!2sSushi+%C3%A0+la+vie+La+Louviere!5e0!3m2!1sfr!2sbe!4v1550831692821");
  document.getElementById("lundi").innerHTML="LA LOUVIERE :Je suis l'horaire du lundi";
  document.getElementById("mardi").innerHTML="LA LOUVIERE :Je suis l'horaire du mardi";
  document.getElementById("mercredi").innerHTML="LA LOUVIERE :Je suis l'horaire du mercredi";
  document.getElementById("jeudi").innerHTML="LA LOUVIERE :Je suis l'horaire du jeudi";
  document.getElementById("vendredi").innerHTML="LA LOUVIERE :Je suis l'horaire du vendredi";
  document.getElementById("samedi").innerHTML="LA LOUVIERE :Je suis l'horaire du samedi";
  document.getElementById("dimanche").innerHTML="LA LOUVIERE :Je suis l'horaire du dimanche";
});
document.getElementById("mons").addEventListener("click", function mons() {
  document.getElementById("menu").innerHTML="Mons";
  document.getElementById("maps").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10161.546557068448!2d3.9519309!3d50.4525245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x39ef9e1348a1877b!2sSushi+%C3%A0+la+vie+Mons!5e0!3m2!1sfr!2sbe!4v1550831733556");
  document.getElementById("lundi").innerHTML="MONS :Je suis l'horaire du lundi";
  document.getElementById("mardi").innerHTML="MONS :Je suis l'horaire du mardi";
  document.getElementById("mercredi").innerHTML="MONS :Je suis l'horaire du mercredi";
  document.getElementById("jeudi").innerHTML="MONS :Je suis l'horaire du jeudi";
  document.getElementById("vendredi").innerHTML="MONS :Je suis l'horaire du vendredi";
  document.getElementById("samedi").innerHTML="MONS :Je suis l'horaire du samedi";
  document.getElementById("dimanche").innerHTML="MONS :Je suis l'horaire du dimanche";
});

