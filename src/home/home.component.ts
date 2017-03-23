import {Component, Inject} from '@angular/core'

@Component({
	selector: 'home',
	template: `
	<input 
		(keyup.enter)="addNewPerson(name)"
		[(ngModel)]="name"
		type="text" />

	<ul><li *ngFor="let user of names">{{ user.name }}</li></ul>`
})

export class HomeComponent{
	name: string = '';
	names = [
		{
			name: 'Alex'
		},
		{
			name: 'Matt'
		}
	]

	addNewPerson(e){
		this.names.push({name: e});
		
		this.name = '';
	}


}

