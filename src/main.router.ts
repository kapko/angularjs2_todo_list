import {RouterModule, Routes} from '@angular/router'
import {Component} from '@angular/core'

@Component({
	template: 'page compoentn'
})
export class PageComponent{}

const route = [
	{
		path: '',
		component: PageComponent,
	}
]

export const Routing = RouterModule.forRoot(route);
