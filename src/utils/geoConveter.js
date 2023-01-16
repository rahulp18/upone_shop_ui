import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

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
      return address;
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
      fromLngToAddress({ lat, lng });
    },
    (error) => {
      console.error(error);
    }
  );
};
