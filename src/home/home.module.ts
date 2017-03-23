import {NgModule} from '@angular/core'
import {HomeComponent} from './home.component.ts'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

@NgModule({
	imports:[
		CommonModule,
		FormsModule
	],
	declarations: [HomeComponent],
	exports: [HomeComponent]
})

export class HomeModule{}