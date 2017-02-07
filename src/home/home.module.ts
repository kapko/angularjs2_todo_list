import {NgModule} from '@angular/core'
import {HomeComponent} from './home.component.ts'
import {HomeRoute} from './home.router.ts'

import { AboutModule } from './about.ts'

@NgModule({
	imports: [HomeRoute, AboutModule],
	declarations: [HomeComponent],
	exports: [HomeComponent]
})

export class HomeModule{}
