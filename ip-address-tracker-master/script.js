fetch('https://geo.ipify.org/api/v1?apiKey=at_AIzaSyBEbzGfLVpdj-9sq8k002zOHwOhbyykDvo&ipAddress=')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.querySelector('.ip').textContent = data.ip;
    document.querySelector('.location').textContent = `${data.location.country}, ${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
    document.querySelector('.timezone').textContent = data.location.timezone;
    document.querySelector('.isp').textContent = data.isp;
    document.querySelector('.loading').style.display = 'none';
    initMap(data.location.lat, data.location.lng)
  })

// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap(lat, lng) {
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 15,
    center: { lat, lng },
  });
  const image =
    "./images/icon-location.svg";
  const beachMarker = new google.maps.Marker({
    position: { lat, lng},
    map,
    icon: image,
  });
}

function search(e, obj) {
  e.preventDefault();
  var value = obj.querySelector('.searchbar').value;
  document.querySelector('.loading').style.display = 'block';
  fetch(`https://geo.ipify.org/api/v1?apiKey=at_4RYApNLZvu4yMmr6NWmWzco7lmXVz&ipAddress=${value}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    if(data.code !== 422) {
      document.querySelector('.ip').textContent = data.ip;
      document.querySelector('.location').textContent = `${data.location.country}, ${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
      document.querySelector('.timezone').textContent = data.location.timezone;
      document.querySelector('.isp').textContent = data.isp;
      initMap(data.location.lat, data.location.lng)
      obj.querySelector('.searchbar').focus();
      document.querySelector('.loading').style.display = 'none';
    } else {
      obj.querySelector('.searchbar').value = 'Not valid';
      obj.querySelector('.searchbar').focus();
    }
  })
}