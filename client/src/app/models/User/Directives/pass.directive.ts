import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appPassword]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PasswordDirective,
        multi: true
    }]
})
export class PasswordDirective implements Validator {

    constructor() { }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        if (control.value.password !== control.value.repeatPassword) {
            return { 'passwordsDoNotMatch': true }
        }
        return null
    }
}