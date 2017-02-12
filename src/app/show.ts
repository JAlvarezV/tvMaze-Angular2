export class Show{
  id:number;
  score:number;
  genres:string;
  image:string;
  language:string;
  name:string;
  country:string;
  premiered:string;
  rating:number;
  status:string;
  summary:string;
  type:string;

  constructor(id: number, score: number, genres: string, image: string, language: string, name: string, country: string, premiered: string, rating: number, status: string, summary: string, type: string) {
    this.id = id;
    this.score = score;
    this.genres = genres;
    this.image = image;
    this.language = language;
    this.name = name;
    this.country = country;
    this.premiered = premiered;
    this.rating = rating;
    this.status = status;
    this.summary = summary;
    this.type = type;
  }
}
