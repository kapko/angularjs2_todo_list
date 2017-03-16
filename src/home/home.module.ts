import {NgModule} from '@angular/core'
import {HomeComponent} from './home.component.ts'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {MaterialModule} from '@angular/material'
import {HomeService} from './home.service.ts'
import {ListModule} from './list/list.module.ts'

@NgModule({
	imports: [CommonModule, ListModule, MaterialModule, FormsModule],
	declarations: [HomeComponent],
	exports: [HomeComponent],
	providers: [
		{
			provide: 'mail',
			useClass: HomeService,
		}
	]
})

export class HomeModule{}