import {Component, Inject} from '@angular/core'

@Component({
	selector: 'home',
	template: `<input 
		[(ngModel)]="name"
		type="text" 
		(keyup.enter)="search(name)"
		placeholder="search" />
		<list></list>`
})

export class HomeComponent{
	name: string = '';
	
	constructor(
		@Inject('user') private users
	){}

	search(e){
		this.users.users.push({
			name: e,
			status: 1,
		});
		this.name = '';
	}
}

