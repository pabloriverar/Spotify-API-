import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

 

  constructor( private http: HttpClient) { 
    console.log('servicio listo');
  }

  getNewReleases(){
    const headers = new HttpHeaders ({
'Authorization': 'Bearer BQCtZCiaAUs4qzHAQsdmoKv4QTZgwTc0tQyfAZtHbAEn3pQPGrFnTMQF5HwfGdqcL-Lqe5c2fCgHMGG9WGQ'
    });

return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers});


}
}
