var hotel = document.querySelector ('.hotel');
var flight = document.querySelector ('.flight');
var hotelView = document.querySelector('.hotel-view')
var flightsView = document.querySelector('.flights');
var mainSearch = document.querySelector('.search');
flightsView.classList.add('inactive');

hotel.addEventListener('click', function(){
    hotelView.classList.remove('inactive');
    flightsView.classList.add('inactive');
    hotel.style.backgroundColor = '#ff3366';
    flight.style.backgroundColor = 'transparent';
    mainSearch.classList.remove('inactive');
})
flight.addEventListener('click', function(){
    flightsView.classList.remove('inactive');
    hotelView.classList.add('inactive');
    flight.style.backgroundColor = '#ff3366';
    hotel.style.backgroundColor = 'transparent';
    mainSearch.classList.add('inactive');
})

