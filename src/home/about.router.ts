import {Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {OneComponent} from './one/one.module.ts'

@Component({
	template: "<h1>About</h1>"
})

export class About{}

const route = [
	{
		path: 'about',
		component: About
	},
	{
		path: 'about/one',
		component: OneComponent
	}
]

export const AbouteRouter = RouterModule.forChild(route);
