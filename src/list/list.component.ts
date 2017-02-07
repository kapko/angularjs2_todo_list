import { Component, Inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import 'rxjs/Rx'

@Component({
	selector: 'list',
	template: `
	<ul>
		<li *ngFor="let contact of lists">
			<p>{{contact?.name}}</p>
			<img src="{{_url}}{{contact.image}}"/>
		</li>
	</ul>`
})

export class ListComponent{
	_url = 'https://starwars-json-server-ewtdxbyfdz.now.sh/';
	lists;
	user;

	constructor(
		@Inject('list') private list
	){
		this.list.getPeople(res=>this.lists = res);
	}
}
