import {Component, Inject} from '@angular/core'

@Component({
	selector: 'list',
	template: `
	<ul><li 
		(click)="click(user)"
		*ngFor="let user of users">
		<b>{{ user.name }}</b>
		<span>{{user.email}}</span></li></ul>
	`
})

export class ListComponent{
	users: any;

	constructor(
		@Inject('mail') private Mail){
		this.users = this.Mail.users;
	}

	click(e){
		this.Mail.client = e;
	}
}
