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
  'Authorization': 'Bearer BQBHTQ4nnrI-o0xGxkqFTl87OFhAyNwDDC-b-NGCi1mIFaIPFbFdIoqpfJLMaylj-Jusi-L8lEPDWxG1FsY'
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

getArtista(termino:string){
  // const headers = new HttpHeaders ({
  //   'Authorization': 'Bearer BQCFX186DK7Zbr5b2RzBhGqKd-egVTeuFNBqxyRXJV3-6lmGdST-AnQ05sH54RYNOFVR7RVjRbp5ppLzZGA'
  //       });
    
    return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=40`)
    .pipe(map(data=>{
      return data['artists'].items;
    }));
    
    }

}

