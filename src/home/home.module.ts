import {NgModule} from '@angular/core'
import {HomeComponent} from './home.component.ts'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {ListModule} from './list/list.module.ts'

@NgModule({
	imports:[
		CommonModule,
		FormsModule,
		ListModule,
	],
	declarations: [HomeComponent],
	exports: [HomeComponent]
})

export class HomeModule{}