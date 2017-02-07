import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { MainComponent } from './main.component.ts'
import {Routing} from './main.router.ts'
import {PageComponent} from './main.router.ts'
import {HomeModule} from './home/home.module.ts'
import {UserService} from './main.service.ts'

@NgModule({
	imports: [BrowserModule, Routing, HomeModule],
	declarations: [MainComponent, PageComponent],
	bootstrap: [MainComponent],
	providers: [
		{
			provide: 'user',
			useClass: UserService
		}
	]
})

export class MainModule{}
