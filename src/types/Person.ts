export interface Person {
  gender: string;
  name: {
    title: string | null;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: {
      latitude: string | null;
      longitude: string | null;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string | number;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string; // ISO8601 format
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string | number | null;
  cell: string | number | null;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string | null; // Nationality
}
