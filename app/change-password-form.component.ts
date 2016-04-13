import {Component} from 'angular2/core'
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {CheckPasswordStrengthValidator} from './check-password-strengthValidator';

@Component({
	selector: 'change-password-form',
	templateUrl: 'app/change-password-form.component.html'
})
export class ChangePasswordFormComponent{
	form: ControlGroup;

	constructor(fb: FormBuilder){
		this.form = fb.group({
			oldPassword: ['', Validators.compose([
					Validators.required
				])],
			newPassword: ['', Validators.compose([
					Validators.required
				])],
			confirmPassword: ['', Validators.compose([
					Validators.required
				])]
		});
	}
}