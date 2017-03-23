import { Component, NgModule  } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import {HomeModule} from './home/home.module.ts'

@Component({
	selector: 'app', 
	template: `<h1>Hello World</h1>
	<home></home>`
})

export class AppComponent{}

@NgModule({
	imports: [ 
		HomeModule,
		BrowserModule,
	],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ],
}) 

export class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
