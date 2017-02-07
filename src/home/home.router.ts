import {RouterModule} from '@angular/router'
import {HomeComponent} from './home.component.ts'
import {NgModule} from '@angular/core'
import {About} from './about.router.ts'
var route = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'about',
		component: About
	}
]

export const HomeRoute = RouterModule.forChild(route);
