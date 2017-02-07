import { Component, Inject } from '@angular/core'

@Component({
	selector: 'app',
	template: `
	<div>
	<h1>kapko</h1>
	<a 
		routerLink="/home" 
		routerLinkActive="active">Home</a>

	<a 
		routerLink="" 
		routerLinkActive="active">Main Page</a>

	<a 
		routerLink="/about" 
		routerLinkActive="active">About Page</a>

	<a 
		routerLink="/about/one" 
		routerLinkActive="active">One</a>

	<router-outlet></router-outlet>
	</div>`
})

export class MainComponent{
	constructor(
		@Inject('user') private kapko
	){
		console.log(this.kapko);
	}
}
