const friends = 
[    
  {"latitude": "52.986375", "user_id": 12, "name": "Christina MacFarlane", "longitude": "-6.043701"},
  {"latitude": "51.92893", "user_id": 1, "name": "Alice Cahill", "longitude": "-10.27699"},
  {"latitude": "51.8856167", "user_id": 2, "name": "Ian MacFarlane", "longitude": "-10.4240951"},
  {"latitude": "52.3191841", "user_id": 3, "name": "Jack Leaon", "longitude": "-8.5072391"},
  {"latitude": "53.807778", "user_id": 28, "name": "Charlie Halligan", "longitude": "-7.714444"},
  {"latitude": "53.4692815", "user_id": 7, "name": "Frank Kehoe", "longitude": "-9.436036"},
  {"latitude": "54.0894797", "user_id": 8, "name": "Eoin Ahearn", "longitude": "-6.18671"},
  {"latitude": "53.038056", "user_id": 26, "name": "Stephen MacFarlane", "longitude": "-7.653889"},
  {"latitude": "54.1225", "user_id": 27, "name": "Enid Rosan", "longitude": "-8.143333"},
  {"latitude": "53.1229599", "user_id": 6, "name": "Theresa Leaon", "longitude": "-6.2705202"},
  {"latitude": "52.2559432", "user_id": 9, "name": "Jack Dempsey", "longitude": "-7.1048927"},
  {"latitude": "52.240382", "user_id": 10, "name": "Georgina Rosan", "longitude": "-6.972413"},
  {"latitude": "53.2451022", "user_id": 4, "name": "Ian Kehoe", "longitude": "-6.238335"},
  {"latitude": "53.1302756", "user_id": 5, "name": "Nora Dempsey", "longitude": "-6.2397222"},
  {"latitude": "53.008769", "user_id": 11, "name": "Richard Finnegan", "longitude": "-6.1056711"},
  {"latitude": "53.1489345", "user_id": 31, "name": "Alan Behan", "longitude": "-6.8422408"},
  {"latitude": "53", "user_id": 13, "name": "Olive Ahearn", "longitude": "-7"},
  {"latitude": "51.999447", "user_id": 14, "name": "Helen Cahill", "longitude": "-9.742744"},
  {"latitude": "52.966", "user_id": 15, "name": "Michael Ahearn", "longitude": "-6.463"},
  {"latitude": "52.366037", "user_id": 16, "name": "Ian Lelu", "longitude": "-8.179118"},
  {"latitude": "54.180238", "user_id": 17, "name": "Patricia Cahill", "longitude": "-5.920898"},
  {"latitude": "53.0033946", "user_id": 39, "name": "Lisa Ahearn", "longitude": "-6.3877505"},
  {"latitude": "52.228056", "user_id": 18, "name": "Bob Lelu", "longitude": "-7.915833"},
  {"latitude": "54.133333", "user_id": 24, "name": "Rose Leaon", "longitude": "-6.433333"},
  {"latitude": "55.033", "user_id": 19, "name": "Enid Cahill", "longitude": "-8.112"},
  {"latitude": "53.521111", "user_id": 20, "name": "Enid Leaon", "longitude": "-9.831111"},
  {"latitude": "51.802", "user_id": 21, "name": "David Ahearn", "longitude": "-9.442"},
  {"latitude": "54.374208", "user_id": 22, "name": "Charlie MacFarlane", "longitude": "-8.371639"},
  {"latitude": "53.74452", "user_id": 29, "name": "Oliver Ahearn", "longitude": "-7.11167"},
  {"latitude": "53.761389", "user_id": 30, "name": "Nick Leaon", "longitude": "-7.2875"},
  {"latitude": "54.080556", "user_id": 23, "name": "Eoin Rosan", "longitude": "-6.361944"},
  {"latitude": "52.833502", "user_id": 25, "name": "David Behan", "longitude": "-8.522366"}
];

stStephGreen = {"latitude": "53.337839", "longitude": "-6.259520"};

// Ignore this......

// let R = 6371;
// const pi = 3.141;
// let SSGLatiR;
// let SSGLongR;

// for(i = 0; i < friends.length; i++) {
//   const latitude = friends[i].latitude;
//   const longitude = friends[i].longitude;

//   const latiR = (latitude * pi / 180).toFixed(4);
//   const longR = (longitude * pi / 180).toFixed(4);
//   SSGLatiR = (stStephGreen.latitude * pi / 180).toFixed(4);
//   SSGLongR = (stStephGreen.longitude * pi / 180).toFixed(4);

//   friends[i].latitude = latiR;
//   friends[i].longitude = longR;

//   friends[i].LatiDistance = (latiR - SSGLatiR).toFixed(4);
//   friends[i].LongDistance = (longR - SSGLongR).toFixed(4);

//   var a = Math.sin(friends[i].LatiDistance / 2) * Math.sin(friends[i].LatiDistance / 2);
// }

// stStephGreen.latitude = SSGLatiR;
// stStephGreen.longitude = SSGLongR;


// console.log(SSGLatiR);

// -----------------------------------------------------------------------------

// Main functions...
const toRadians = degree => {
    return degree * (Math.PI / 180);
  }

const toDifferenciate = (x, y) => {
  return x - y;
}

// Convert the degrees to radians for St. Stephen' Green...
stStephGreen.latitude = (toRadians(stStephGreen.latitude)).toFixed(4);
stStephGreen.longitude = (toRadians(stStephGreen.longitude)).toFixed(4);

const getDistanceInKilo = () => {
  for(j = 0; j < friends.length; j++) {
    const radius = 6371;

    // Degrees to radians for the friends...
    friends[j].latitude = (toRadians(friends[j].latitude)).toFixed(4);
    friends[j].longitude = (toRadians(friends[j].longitude)).toFixed(4);

    // The difference between St. Stephen's Green and each their houses...
    var latiDiff = (toDifferenciate(friends[j].latitude, stStephGreen.latitude)).toFixed(4);
    var longDiff = (toDifferenciate(friends[j].longitude, stStephGreen.longitude)).toFixed(4);

    // Haversine Formula
    var a = Math.sin(latiDiff / 2) * Math.sin(latiDiff / 2) + 
    Math.cos(stStephGreen.latitude) * Math.cos(friends[j].latitude) * 
    Math.sin(longDiff / 2) * Math.sin(longDiff / 2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var _0 = radius * c;

    // Add a new key to store the respective distances in kilometers...
    friends[j].kilometers = _0;
  }
}

// function call...
getDistanceInKilo();

// array to store all friends within 100 kilometers...
const within100km = [];
for(const invitees of friends) {
  if(invitees.kilometers <= 100) {
    within100km.push(invitees);
  }
  // Sorting by user_id...
  within100km.sort((a, b) => a.user_id - b.user_id);
}

// Loop thro to print user_id and name...
within100km.forEach(({user_id, name}) => {
  console.log(`User ID: ${user_id}, Name: ${name}`);
})

// Console print for normal array.
console.log(within100km);