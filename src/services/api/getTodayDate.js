
// Communicates with TwinFlame API to get today's date.

const getTodayDate = async function () {

    let date = "";
    let fr_date = "";
    const url = "https://us-central1-tf-natal.cloudfunctions.net/horoscopeapi_test?token=mmEUtLATc8w_UNnHuR2&date=today&range&sign=sagittarius"
    const response = await fetch(url, {method: "POST"});
  
  if (response.status == 200) {
      const data = await response.json();
      date = data.current_date;
       fr_date = date.at(3) + date.at(4) + "/" + date.at(0) + date.at(1) + "/" + date.at(6) + date.at(7) + date.at(8) + date.at(9);
  } else {
    throw new Error(response.statusText);
  }

  return fr_date;
}

export {
  getTodayDate
}