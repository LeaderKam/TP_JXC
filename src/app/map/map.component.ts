import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  map;
  latitude = 48.114384;
  longitude = 3.767876;

  // retrieve from https://gist.github.com/ThomasG77/61fa02b35abf4b971390
  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41]
  });
  cord = {};

  constructor() { }

  ngAfterViewInit(): void {
    this.createMap();
  }

  createMap() {
    const parcThabor = {
      lat: 48.114384,
      lng: -1.669494,
    };

    const zoomLevel = 12;

    this.map = L.map('map', {
      center: [parcThabor.lat, parcThabor.lng],
      zoom: zoomLevel
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 5,
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.map);
    const descriptionWikipedia = `
      Le parc du Thabor`;
    const popupOptions = {
      coords: parcThabor
    };

    this.addMarker(parcThabor);

    this.map.on('click', function (e) {
      this.cord = {
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      };
     // this.addMarker(this.cord);

      alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
    });
    //this.addMarker(this.cord);
  }

  addMarker(coords) {
    const marker = L.marker([coords.lat, coords.lng], { icon: this.smallIcon });
    marker.addTo(this.map);
  }
  onChoseLocation(event) {
   // console.log(event);
  }
}

