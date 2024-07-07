import { createContext, useState, ReactNode } from 'react';

const UserLocation = createContext({
  location: { lat: 0, lng: 0 },
  setLocation: (location: { lat: number; lng: number }) => {},
  address: '',
  setAddress: (address: string) => {},
  locationURL: '',
  setLocationURL: (locationURL: string) => {},
});

interface UserLocationProviderProps {
  children: ReactNode;
}

const UserLocationProvider = ({ children }: UserLocationProviderProps) => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [address, setAddress] = useState('');
  const [locationURL, setLocationURL] = useState('');

  return (
    <UserLocation.Provider
      value={{
        location,
        setLocation,
        address,
        setAddress,
        locationURL,
        setLocationURL,
      }}
    >
      {children}
    </UserLocation.Provider>
  );
};

export { UserLocation, UserLocationProvider };
