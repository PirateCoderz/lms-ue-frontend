/* eslint-disable no-var */
/* eslint-disable radix */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable object-shorthand */
import {useState, useEffect, useRef } from "react";

const GoogleMap = ({ paths, stops, width = "100%", height = "100%" }) => {
  const [currentLocation, setCurrentLocation] = useState(null);

  const center = parseInt(paths?.length / 2);
  const centerPathLat = paths[center].lat;
  const centerpathLng = paths[center + 5].lng;

  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    function initMap() {
      const map = new window.google.maps.Map(mapRef.current, {
        center: {
          lat: 31.3964,
          lng: 73.06907,
        },
        zoom: 16,
        heading: 220,
        tilt: 47.5,
        mapId: "90f87356969d889c",
      });
      const buttons = [
        [
          "Rotate Left",
          "rotate",
          20,
          window.google.maps.ControlPosition.LEFT_CENTER,
        ],
        [
          "Rotate Right",
          "rotate",
          -20,
          window.google.maps.ControlPosition.RIGHT_CENTER,
        ],
        [
          "Tilt Down",
          "tilt",
          20,
          window.google.maps.ControlPosition.TOP_CENTER,
        ],
        [
          "Tilt Up",
          "tilt",
          -20,
          window.google.maps.ControlPosition.BOTTOM_CENTER,
        ],
      ];
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          const marker = new window.google.maps.Marker({
            position: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            map: map,
            title: "Your current location",
            icon: {
              url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            },
          });

          const directionsService = new window.google.maps.DirectionsService();
          const directionsRenderer = new window.google.maps.DirectionsRenderer({
            map: map,
          });

          const destination = {
            lat: 31.3964,
          lng: 73.06907,
          };

          const request = {
            origin: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            destination: destination,
            travelMode: "DRIVING",
          };

          directionsService.route(request, (response, status) => {
            if (status === "OK") {
              directionsRenderer.setDirections(response);
            } else {
              // console.log("Directions request failed due to " + status);
            }
          });
        },
        (error) => {
          console.log(error);
        }
      );


      buttons.forEach(function ([text, mode, amount, position]) {
        const controlDiv = document.createElement("div");
        const controlUI = document.createElement("button");

        controlUI.classList.add("ui-button");
        controlUI.innerText = `${text}`;
        controlUI.addEventListener("click", function () {
          console.log("amount", map.getHeading());
          adjustMap(mode, amount);
        });
        controlDiv.appendChild(controlUI);
        map.controls[position].push(controlDiv);
      });

      function adjustMap(mode, amount) {
        switch (mode) {
          case "tilt":
            map.setTilt(map.getTilt() + amount);
            break;
          case "rotate":
            map.setHeading(map.getHeading() + amount);
            break;
          default:
            break;
        }
      }
      const polyline = new window.google.maps.Polyline({
        path: paths,
        geodesic: true,
        strokeColor: "#0088FF",
        strokeOpacity: 0.6,
        strokeWeight: 6,
      });

      polyline.setMap(map);

      stops?.data.forEach((stop, index) => {
        new window.google.maps.Marker({
          position: { lat: stop.lat, lng: stop.lng },
          map: map,
          title: stop.id,
          key: index,
        });
      });

      // Create a marker at the start of the polyline
      const marker = new window.google.maps.Marker({
        position: paths[0],
        map: map,
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        },
      });
      // Store a reference to the marker so we can update its position later
      markerRef.current = marker;
      // Move the marker along the polyline on a timer
      let currentIndex = 0;
      const timer = setInterval(() => {
        currentIndex++;
        if (currentIndex >= stops.length) {
          clearInterval(timer);
        } else {
          marker.setPosition(paths[currentIndex]);
        }
      }, 2000);
    }
    initMap();
  }, [paths, stops]);

  return <div ref={mapRef} style={{ height: height, width: width, objectFit: '100%' }} />;
};

export default GoogleMap;
