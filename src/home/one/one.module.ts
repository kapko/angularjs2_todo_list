import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'

@Component({
	template: '<h1>id One is came</h1>'
})

export class OneComponent{}

const route = [
	{
		path: 'one',
		component: OneComponent
	}
]
export const OneRouter = RouterModule.forChild(route);


@NgModule({
	imports: [OneRouter],
	declarations: [OneComponent],
	exports: [OneComponent]
})

export class OneModule{}
