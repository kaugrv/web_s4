
const getNASAPics = async function () {

let signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
let urls = []

// var zodiac = {
//   "Aries": { "angel": 20, "ra": 3, "de": 20 },
//   "Taurus": { "angel": 20, "ra": 4, "de": 20 },
//   "Gemini": { "angel": 20, "ra": 6, "de": 20 },
//   "Cancer": { "angel": 20, "ra": 8, "de": 20 },
//   "Leo": { "angel": 20, "ra": 10, "de": 20 },
//   "Virgo": { "angel": 20, "ra": 12, "de": 20 },
//   "Libra": { "angel": 20, "ra": 15, "de": 20 },
//   "Scorpio": { "angel": 20, "ra": 17, "de": 20 },
//   "Sagittarius": { "angel": 20, "ra": 19, "de": -25 },
//   "Capricorn": { "angel": 20, "ra": 21, "de": -20 },
//   "Aquarius": { "angel": 20, "ra": 23, "de": -15 },
//   "Pisces": { "angel": 20, "ra": 1, "de": -10 }
// };

// var url = "http://server2.sky-map.org/map?angel=" + angel + "&ra=" + ra + "&de=" + de + "&show_grid=0&show_const_lines=1&constellation_lines_color=FFFFFF";

signs.forEach(function(sign) {
  urls.push("https://images-api.nasa.gov/search?q="+ sign.toLocaleLowerCase() + " constellation")
});

const tab = [];

for (let i = 0; i < urls.length; i++) {
  const url = urls[i];
  const response = await fetch(url);
  
  if (response.status == 200) {
      const data = await response.json();
      console.log(data);
      tab.push(data);
  } else {
    throw new Error(response.statusText);
  }
}
return tab
}

export {
  getNASAPics
}