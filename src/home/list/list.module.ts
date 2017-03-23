import {NgModule} from '@angular/core'
import {ListComponent} from './list.component.ts'
import {CommonModule} from '@angular/common'

@NgModule({
	imports: [CommonModule],
	declarations: [ListComponent],
	exports: [ListComponent]
})

export class ListModule{}