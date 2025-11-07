
const urlParams = new URLSearchParams(window.location.search);
const cityName = urlParams.get("city");
const spotName = urlParams.get("spot");

const city = cities.find(c => c.name.toLowerCase() === cityName.toLowerCase());
const spot = city ? city.spots.find(s => s.name.toLowerCase() === spotName.toLowerCase()) : null;

const container = document.getElementById("spotDetails");

if (!spot) {
  container.innerHTML = `<p style="padding:20px;">❌ Spot not found.</p>`;
} else {
  const mapURL = `https://www.google.com/maps?q=${encodeURIComponent(spot.name)}&output=embed`;

  container.innerHTML = `
    <img src="${spot.img}" alt="${spot.name}">
    <div class="details-content">
      <h2>${spot.name}</h2>
      <p>${spot.location}</p>
      <p> ${spot.history}</p>
      <p>Food - ${spot.prices.food}, Activities - ${spot.prices.activities}, Transport - ${spot.prices.transport}</p>
      <iframe src="${mapURL}" loading="lazy"></iframe>
      <button class="sosbtn" >SOS</button>
    </div>
  `;
}

