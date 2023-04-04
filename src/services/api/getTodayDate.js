
const getTodayDate = async function () {

    const tab = [];
    const url = "https://us-central1-tf-natal.cloudfunctions.net/horoscopeapi_test?token=mmEUtLATc8w_UNnHuR2&date=today&range&sign=sagittarius"
    const response = await fetch(url, {method: "POST"});
  
  if (response.status == 200) {
      const data = await response.json();
      tab.push(data);
  } else {
    throw new Error(response.statusText);
  }

  return tab
}

export {
  getTodayDate
}