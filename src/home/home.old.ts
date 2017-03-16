import {Component} from '@angular/core'

@Component({
	selector: 'home',
	template: `
	<ul><li 
		(click)="click(user)"
		*ngFor="let user of users">
		<b>{{ user.name }}</b>
		<span>{{user.email}}</span></li></ul>
	<div>
		<input 
			type="text"
			[(ngModel)]="client.name"  />
		<input 
			type="text"
			[(ngModel)]="client.email"  />
	</div>`
})

export class HomeComponent{

	client = {}

	users = [
		{
			name: 'John',
			email: 'john@gmail.com',
			status: false
		}, 
		{
			name: 'Tom',
			email: 'tom@gmail.com',
			status: true
		}
	]

	click(e){
		this.client = e;
	}
}






