import {Component} from 'angular2/core';
import {ChangePasswordFormComponent} from './change-password-form.component';

@Component({
    selector: 'my-app',
    template: '<h1>Change Password Form</h1> <change-password-form></change-password-form>',
    directives: [ChangePasswordFormComponent]
})
export class AppComponent { }