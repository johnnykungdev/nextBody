console.log("hello world")
//
import infoContent from './infoContent.js'

class Map {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 49.268140, lng: -123.069610 },
        zoom: 16,
    });
    nextBody = new google.maps.Marker({
        position: { lat: 49.268140, lng: -123.069610 },
        map: this.map
    })
    showInfo() {
        return new google.maps.InfoWindow({
            content: infoContent
        }).open(this.map, this.nextBody)
    }
}

const map = new Map()
map.showInfo()
