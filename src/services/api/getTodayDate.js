
const getTodayDate = async function () {

    const tab = [];
    const url = "https://aztro.sameerkumar.website?day=today&sign=sagittarius"
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