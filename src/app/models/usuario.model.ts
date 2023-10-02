import { environment } from "src/environments/environment";

interface UserResponse {
  name: string;
  email: string;
  password?: string;
  image?: string;
  role?: string;
  google?: boolean;
  id?: string;
}
const base_url = environment.baseUrl;
export class User {
    public name: string;
    public email: string;
    private password?: string;
    private img?: string;
    public role?: string;
    private google?: boolean;
    public id?: string;
  constructor(user: UserResponse
  ) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.img = user.image;
    this.role = user.role;
    this.google = user.google;
    this.id = user.id;
  }
  get imgUser(): string {
    if(this.img?.includes('https')){
      return this.img;
    }
    return `${base_url}/uploads/user/${this.img || 'no-image'}`;
  }
}
