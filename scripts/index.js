let navbar = document.querySelector('#navbar')
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('activate');
}

function scrollToSection(id) {
    const element = document.querySelector(id);
    const offset = 100;
  
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
  
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}

function startMap() {
    var coords = {lat: -34.9964963, lng: -64.9672817};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3.5,
        center: coords,
        draggable: true,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    });

    map.addListener('click', function(event) {
        event.stop();
    });

    var locations = [
        {
            position: {lat: -34.154, lng: -58.669},
            title: "Delta del Paraná",
        },
        {
            position: {lat: -30.888, lng: -62.080},
            title: "Laguna Mar Chiquita",
        },
        {
            position: {lat: -28.4883, lng: -57.8356},
            title: "Esteros del Iberá",
        },
        {
            position: {lat: -26.999, lng: -67.698},
            title: "Laguna De Los Pozuelos",
        },
        {
            position: {lat: -22.0296, lng: -66.6949},
            title: "Lagunas de Vilama",
        },
        {
            position: {lat: -33.048, lng: -59.868},
            title: "Laguna De Guanacache",
        }
    ];
    
    var infoWindow = new google.maps.InfoWindow();

    locations.forEach(function(location) {
        var marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title
        });

        marker.addListener('click', function() {
            infoWindow.setContent('<h2>' + location.title);
            infoWindow.open(map, marker);
            map.addListener('click', function() {
                infoWindow.close();
            });
        });
    });
}
