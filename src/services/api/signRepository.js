
// Communicates with TwinFlame API and gets all signs data.
// Gets constellations images from wikisky.

const getSignData = async function () {

  let signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
  let logos = ["♈️", "♉️", "♊️", "♋️", "♌️", "♍️", "♎️", "♏️", "♐️", "♑️", "♒️", "♓️"];
  let types = ["🔥 Fire", "⛰️ Earth", "🌬️ Air", "💧 Water"];
  let urls = []
  let urls_img = []
  let token = "mmEUtLATc8w_UNnHuR2"
  var zodiac = {
  "Aries": { "angel": 20, "ra": 3, "de": 20 },
  "Taurus": { "angel": 20, "ra": 4, "de": 20 },
  "Gemini": { "angel": 20, "ra": 6, "de": 20 },
  "Cancer": { "angel": 20, "ra": 8, "de": 20 },
  "Leo": { "angel": 20, "ra": 10, "de": 20 },
  "Virgo": { "angel": 20, "ra": 12, "de": 20 },
  "Libra": { "angel": 20, "ra": 15, "de": 20 },
  "Scorpio": { "angel": 20, "ra": 17, "de": 20 },
  "Sagittarius": { "angel": 20, "ra": 19, "de": -25 },
  "Capricorn": { "angel": 20, "ra": 21, "de": -20 },
  "Aquarius": { "angel": 20, "ra": 23, "de": -15 },
  "Pisces": { "angel": 20, "ra": 1, "de": -10 }
};

  signs.forEach(function(sign) {
    urls.push("https://us-central1-tf-natal.cloudfunctions.net/horoscopeapi_test?token=" + token +"&date=today&range&sign="+ sign.toLocaleLowerCase())
    urls_img.push("http://server2.sky-map.org/map?angel=" + zodiac[sign].angel + "&ra=" + zodiac[sign].ra + "&de=" + zodiac[sign].de + "&show_grid=0&show_const_lines=1&constellation_lines_color=ffffff&w=800&h=800&background_color=%23E3DDBE&constellation_lines_width=5");
  });

  const tab = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const response = await fetch(url, {method: "POST"});
    
    if (response.status == 200) {
        const data = await response.json();
        data.sign_name = signs[i];
        data.sign_logo = logos[i];
        data.sign_img = require("../../assets/"+signs[i]+".png");
        data.sky_img_url = urls_img[i];
        data.sign_type = types[i%4];
        tab.push(data);
    } else {
      throw new Error(response.statusText);
    }
  }
  return tab
}

export {
  getSignData
}