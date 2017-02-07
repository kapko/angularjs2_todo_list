import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/Rx'

@Injectable()

export class ListService{
	api = 'https://starwars-json-server-ewtdxbyfdz.now.sh';

	constructor(public http: Http){}

	getPeople(callB){
		this.http.get(this.api + '/people')
			.subscribe(item=>callB(item.json()));
	}
}


