import { Component, NgModule  } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import {HomeModule} from './home/home.module.ts'
import {CommonModule} from '@angular/common'

@Component({
	selector: 'app', 
	template: `<h1>hello World</h1> <home></home>`
})

export class AppComponent{}

@NgModule({
	imports: [ 
		BrowserModule,
		CommonModule,
		HomeModule, 
	],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ]
})

export class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
