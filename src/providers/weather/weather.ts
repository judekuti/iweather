import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {
  apiKey = '5e1f89fe4ed775b4';
  url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

getWeather(city, state){
  return this.http.get(this.url+'/'+state+'/'+city+'.json')
}

}
