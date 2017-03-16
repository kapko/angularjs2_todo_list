import {Component, Inject} from '@angular/core'

@Component({
	selector: 'home',
	template: `
	<list></list>
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
	constructor(
		@Inject('mail') public mails
	){
		console.log(this.mails);
		// this.client = this.mails.client;
	}
}


