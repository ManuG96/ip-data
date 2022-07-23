const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "cd6ceab184msh7df74a8a9dc5d61p1d4252jsn3cebd408c705",
		"X-RapidAPI-Host": "ip-geolocation-and-threat-detection.p.rapidapi.com"
	}
};

const fetchIpInfo = ip => {
  return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, options)
    .then(res => res.json())
    .catch(err => console.log(err))
}

const form = document.querySelector("#form")
const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const results = document.querySelector("#results")

form.addEventListener("submit", async (event) => {
  event.preventDefault()
  const {value} = input
  if(!value) return

  submit.setAttribute("disable", "")
  submit.setAttribute("aria-busy", "true")

  const ipInfo = await fetchIpInfo(value)

  if(ipInfo) {
    results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

  submit.removeAttribute("disable", "")
  submit.removeAttribute("aria-busy", "true")
})
