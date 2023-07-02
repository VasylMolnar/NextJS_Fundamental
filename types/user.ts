export type UserAddress = {
  street: string;
  city: string;
  zipcode: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
};
