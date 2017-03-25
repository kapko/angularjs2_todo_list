import { Component  } from '@angular/core'

@Component({
	selector: 'home',
	template: `<ul>
		<li *ngFor="let name of names; let i = index">
		{{ i }} {{ name.surname }} </li>
	</ul>`
})

export class HomeComponent{
	name: string = 'Leo';
	names: any  = [
		{
			surname: 'Alex'
		},
		{
			surname: 'John'
		}
	];

}