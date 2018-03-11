import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';
import { Marvel } from '../class/marvel';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class MarvelService {

  constructor(private http: HttpClient) { }

  private publicKey = '6577bbc992f86dc21afca073441d31aa';
  private privateKey = 'c55fa02902672c30227af5cf36b91fd452b90dc2';
  private url = `https://gateway.marvel.com/v1/public/`;

  // https://gateway.marvel.com/v1/public/characters?apikey=6577bbc992f86dc21afca073441d31aa

  ngOnInit() {
  }

  private getTimeStamp() : string {
    return new Date().valueOf().toString();
  } 

  private getHash(timeStamp : string) : string {
    let hashGenerator : Md5 = new Md5();
    hashGenerator.appendStr(timeStamp);
    hashGenerator.appendStr(this.privateKey);
    hashGenerator.appendStr(this.publicKey);
    let hash : string = hashGenerator.end().toString();
    return hash;
}

  getCharacters  () {
    let _timeStamp = this.getTimeStamp();
    let _hash = this.getHash(_timeStamp);
    let requestUrl = `${this.url}characters?ts=${_timeStamp}&apikey=${this.publicKey}&hash=${_hash}`;
	return this.http.get(requestUrl);
    
  }

}
