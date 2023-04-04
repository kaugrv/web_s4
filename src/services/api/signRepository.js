
const getSignData = async function () {

let signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
let logos = ["♈️", "♉️", "♊️", "♋️", "♌️", "♍️", "♎️", "♏️", "♐️", "♑️", "♒️", "♓️"];
let urls = []
let token = "mmEUtLATc8w_UNnHuR2"

signs.forEach(function(sign) {
  //urls.push("https://aztro.sameerkumar.website?day=today&sign=" + sign.toLocaleLowerCase())
  urls.push("https://us-central1-tf-natal.cloudfunctions.net/horoscopeapi_test?token=" + token +"&date=today&range&sign="+ sign.toLocaleLowerCase())
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