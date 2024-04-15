export class CreateUserDto {
  email: string;
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}
