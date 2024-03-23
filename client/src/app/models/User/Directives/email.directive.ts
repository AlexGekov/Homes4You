import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appEmail]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EmailDirective,
        multi: true
    }]
})
export class EmailDirective implements Validator {
    private Regex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    constructor() { }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        if (!this.Regex.test(control.value?.toLowerCase())) {
            return { 'incorrectEmail': true }
        }
        return null
    }
}