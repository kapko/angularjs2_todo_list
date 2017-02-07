import { NgModule } from '@angular/core'
import { ListComponent } from './list.component.ts'
import { ListService } from './list.service.ts'
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'

@NgModule({
	imports: [HttpModule, CommonModule],
	declarations: [ListComponent],
	exports: [ListComponent],
	providers: [
		{
			provide: 'list',
			useClass: ListService,
		}
	]
})

export class ListModule{}
