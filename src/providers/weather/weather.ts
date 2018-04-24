import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '5e1f89fe4ed775b4';
  url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
  }

getWeather(city, state){
  return this.http.get(this.url+'/'+state+'/'+city+'.json')
  .map(res => res.json());

}

}
