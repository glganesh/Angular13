import { AbstractControl,NG_VALIDATORS,Validator} from '@angular/forms';

import {Directive,Input } from '@angular/core';


@Directive({

    selector:'[appNameNotAllowed]',
    providers:[{provide:NG_VALIDATORS,useExisting:FirstNameValidatorDirective,multi:true}],

})

export class FirstNameValidatorDirective implements Validator
{
    @Input('appNameNotAllowed') NameNotAllowed:string;

    validate(control:AbstractControl):{[key:string]:any } | null

    {
const notallowed = new RegExp(this.NameNotAllowed).test(control.value);

return notallowed?{'NameNotAllowed':true} : null;

    }
}