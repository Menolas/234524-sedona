/* var block = document.querySelector('.site-list');
if (block) {
  block.classList.add('site-list--open');
}
var btn = document.querySelector('.toggler');
if (btn) {
btn.classList.add('toggler--open');
}
btn.addEventListener('click', function() {
  block.classList.toggle('site-list--open');
  btn.classList.toggle('toggler--open');
});

var link = document.querySelector('.btn--sent-review');
var popup = document.querySelector('.modal');
var close = popup.querySelector('.btn--modal');

var form = popup.querySelector('form');
var name = popup.querySelector('[name=name]');
var surname = popup.querySelector('[name=surname]');
var phone = popup.querySelector('[name=tel]');
var email = popup.querySelector('[name=email]');
var failure = document.querySelector('.modal__failure');

link.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('modal--js');
});
close.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('modal--js');
});

form.addEventListener('submit', function(event) {
  if(!name.value || !surname.value || !phone.value || !phone.value || !email.value) {
    event.preventDefault();
    failure.classList.add('modal__failure--js');
  }
});

function initMap() {
  var latLng = {lat: 59.93857, lng: 30.323};
  var mapCenter = {lat: 59.9388, lng: 30.323}
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 16,
    center: mapCenter,
    mapTypeControl: false,
    streetViewControl: false,
    scrollwheel: false,
});

var image = "../img/icon-map-marker.svg"
var marker = new google.maps.Marker({
  position: latLng,
  map: map,
  icon: image,
});
}
*/