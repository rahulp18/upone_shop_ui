import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCstQ6WsHHO_0pYDL-oUmWtUJuXSB8qMUo");

Geocode.setLanguage("en");

Geocode.setRegion("in");

Geocode.setLocationType("ROOFTOP");

Geocode.enableDebug();

export const fromLngToAddress = ({ lat, lng }) => {
  console.log(lat, lng);
  Geocode.fromLatLng(lat, lng).then(
    (response) => {
      const address = response.results[0].formatted_address;
      console.log(address);
    },
    (error) => {
      console.error(error);
    }
  );
};
export const addToLat = (address) => {
  Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );
};
