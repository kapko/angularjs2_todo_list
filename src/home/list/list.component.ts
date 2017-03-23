import {Component, Inject} from '@angular/core'

@Component({
	selector: 'list',
	template: `
		<ul>
			<li *ngFor="let user of users; let i = index">
				<span>{{ i }} {{ user.name }}</span>
			</li>
		</ul>
	`
})

export class ListComponent{
	users: any = [];

	constructor(
		@Inject('user') public Users
	){
		this.users = this.Users.users;
	}
}

