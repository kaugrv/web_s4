
const getNASAPics = async function () {

let signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
let urls = []


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