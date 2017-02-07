import {NgModule} from '@angular/core'
import {About, AbouteRouter} from './about.router.ts'
import {OneComponent, OneRouter} from './one/one.module.ts'

@NgModule({
	imports:[AbouteRouter, OneRouter],
	declarations: [About, OneComponent],
	exports: [About, OneComponent]
})

export class AboutModule{}