import { GOOGLE_MAPS_API_KEY } from '@/config/config';

export const getAddress = async ({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) => {
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`; // Reemplaza con tu clave de API
  try {
    const response = await fetch(geocodeUrl);
    const data = await response.json();
    if (data.results && data.results[0]) {
      const address = data.results[0].formatted_address
        .split(',')
        .slice(1)
        .join(',')
        .trim();
      return address;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error al obtener la dirección:', error);
    return false;
  }
};
