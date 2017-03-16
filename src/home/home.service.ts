import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

@Injectable()

export class HomeService{
	users = [
		{
			name: 'John',
			email: 'john@gmail.com',
			status: false
		}, 
		{
			name: 'Tom',
			email: 'tom@gmail.com',
			status: true
		}
	]
}

