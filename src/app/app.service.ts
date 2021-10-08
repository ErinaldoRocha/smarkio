import { Injectable} from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http";

export interface caracteristicas {

}



@Injectable({
  providedIn: 'root'
})

export class AppService{
  URL = 'https://api.themoviedb.org/3';
  token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzEyNmMxYWU2OGM1ODA5YjdjNTY3NmEwOTU5Y2RhYSIsInN1YiI6IjYxNWQ5ZmIyZDE0NDQzMDA0MzY0ZTM0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ZYN1q2CaAwsF69xUaw7b7R8MwjgEONYaLEenIGslLE'
  key = 'a7126c1ae68c5809b7c5676a0959cdaa'
  private header: HttpHeaders = new HttpHeaders();


  constructor(private http: HttpClient){

  }

  lista(): Promise<caracteristicas[]> {
    return new Promise((resolve, reject) => {
      let headers = this.header.append('Content-Type', 'application/json');
      headers = this.header.append('Authorization', 'Bearer ' + this.token);
     this.http.get(this.URL+'/movie/popular?api_key=${key}',{headers}).subscribe((usuario: any) => {
       resolve(usuario);
       }, (err: any) => {
         reject(err);
     });
   })
  }

  filmeId(id: any) {
    return new Promise((resolve, reject) => {
      let headers = this.header.append('Content-Type', 'application/json');
      headers = this.header.append('Authorization', 'Bearer ' + this.token);
     this.http.get(this.URL+'/movie/'+id+'?api_key=${key}', { headers }).subscribe((usuario: any) => {
       resolve(usuario);
       }, (err: any) => {
         reject(err);
     });
   })
  }

}
