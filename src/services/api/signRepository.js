
async function getSignData() {
    const response = await fetch("https://aztro.sameerkumar.website/", {
		method: "POST"}) 
    if (response.status == 200) {
        const data = response.json()
        return data;
    } else {
    new Error(response.statusText)
    }

}