interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: addressInter;
  phone: string;
  website: string;
  company: companyInter;
}

interface addressInter {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: geoInter;
}

interface geoInter {
  lat: "-37.3159";
  lng: "81.1496";
}

interface companyInter {
  name: string;
  catchPhrase: string;
  bs: string;
}

export default UserInterface;
