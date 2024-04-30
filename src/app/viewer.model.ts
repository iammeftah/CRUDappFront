export class Viewer {
  id: number;
  fullName: string;
  email: string;
  rating: number;

  constructor(id: number, fullName: string, email: string, rating: number) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.rating = rating;
  }
}
