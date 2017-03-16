import { Component, NgModule  } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
@Component({
	selector: 'app', 
	template: `<h1>hello World</h1>`
})

export class AppComponent{}

@NgModule({
	imports: [ 
		BrowserModule,
	],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ]
})

export class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
