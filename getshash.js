 import Geohash from 'https://cdn.jsdelivr.net/npm/latlon-geohash@2.0.0';


var hs = window.location.hash;

 if (hs) {
    const st = hs.split(":");
    console.log(st[0].substring(2, 100));
    console.log(st[1]);
    
    var gh = Geohash.encode(st[0].substring(2, 100),st[1],9);
    console.log(gh);
    document.getElementById('hash').innerHTML = gh;
}
else {
    console.log("It is null");
}
console.log(hs);

