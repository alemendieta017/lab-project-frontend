import { useCallback, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '@/config/config';
import { getAddress } from '@/services/maps';
type Location = {
  lat: number;
  lng: number;
};

type SetLocation = (location: Location) => void;

const MapSelector = ({
  location,
  setLocation,
  setAddress,
  setLocationURL,
}: {
  location: Location;
  setLocation: SetLocation;
  setAddress: (address: string) => void;
  setLocationURL: (locationUrl: string) => void;
}) => {
  const DEFAULT_CENTER_LOCATION = { lat: -25.520202, lng: -54.627405 };
  const locationSelected = location.lat !== 0 && location.lng !== 0;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY || '',
  });
  const [searchingAddress, setSearchingAddress] = useState(false);

  const handleMapClick = useCallback(
    async (event: google.maps.MapMouseEvent) => {
      if (searchingAddress) return;
      if (event.latLng) {
        setSearchingAddress(true);

        const address = await getAddress({
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        });
        if (address) {
          setLocation({
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
          });
          const locationUrl = encodeURI(
            `https://www.google.com/maps?q=${event.latLng.lat()},${event.latLng.lng()}`,
          );
          setLocationURL(locationUrl);
          setSearchingAddress(false);
          setAddress(address);
        } else {
          setSearchingAddress(false);
          setAddress('');
        }
      }
    },
    [searchingAddress, setLocation, setLocationURL, setAddress],
  );

  return (
    <>
      {isLoaded ? (
        <div className='h-64 w-full'>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            zoom={12}
            center={locationSelected ? location : DEFAULT_CENTER_LOCATION}
            onClick={handleMapClick}
          >
            {location && <Marker position={location} />}
          </GoogleMap>
        </div>
      ) : (
        <p>Cargando mapa...</p>
      )}
    </>
  );
};

export default MapSelector;
