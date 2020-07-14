import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

 

  constructor( private http: HttpClient) { 
    console.log('servicio listo');
  }

  getQuery ( query: string ){
const url = `https://api.spotify.com/v1/${query}`;

const headers = new HttpHeaders ({
  'Authorization': 'Bearer BQACN69kpG5pxkX3fqxMA7a7kdR-34f6OZQ3MExhRwsNqM3T1zhBnvr3CQEyVBns79mdFKF0WwHlOhDqbXY'
      });
      return this.http.get(url,{ headers });
  }

  getNewReleases(){
//     const headers = new HttpHeaders ({
// 'Authorization': 'Bearer BQCgUaYg2lulA2w1uPcYivSxwQGv-Bd8LMqtV4bFCbgDQ7JI2wFX0jX-_7u0ArQg-o62pV1JuW4_wtv6OCU'
//     });

return this.getQuery('browse/new-releases?limit=40')
.pipe(map(data=>{
  return data['albums'].items;
}));
}

getArtistas(termino:string){
    
    return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=40`)
    .pipe(map(data=>{
      return data['artists'].items;
    }));
    
    }

    getArtista(id:string){
    
      return this.getQuery(`artists/${id}`);
      //  .pipe(map(data=>{
      //   return data['artists'].items;
      // }));
      
      }
  

      getTopTracks(id:string){
    
        return this.getQuery(`artists/${id}/top-tracks?country=us`)
         .pipe(map(data=>{
          return data['tracks'];
         }));
        
        }
  

}


