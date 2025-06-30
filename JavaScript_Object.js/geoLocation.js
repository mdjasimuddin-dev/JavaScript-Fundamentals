navigator.geolocation.getCurrentPosition(function (position) {
    let altitude = position.coords.altitude;
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude
    let speed = position.coords.speed

    document.write('altitude :', altitude, '<br/>')
    document.write('longitude :', longitude, '<br/>')
    document.write('latitude :', latitude, '<br/>')
    document.write('speed :', speed, '<br/>')
})