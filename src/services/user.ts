import {Injectable} from '@angular/core'

@Injectable()

export class UserSevice{
	users = [
		{
			name: 'John',
			status: 0,
		},
		{
			name: 'Moon',
			status: 0,
		},
		{
			name: 'Alex',
			status: 0,
		}
	]
}
