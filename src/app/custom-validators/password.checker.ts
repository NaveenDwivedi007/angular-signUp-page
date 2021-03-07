import { FormGroup } from '@angular/forms'

export function PasswordChecker(
    ControlName:string,
    CompairControlName:string
    ){
        return (formGroup:FormGroup)=>{
            const password = formGroup.controls[ControlName];
            const confPassword= formGroup.controls[CompairControlName];

            if (password.value !== confPassword.value) {
                confPassword.setErrors({mustmatch: true},{})
            } else{
                confPassword.setErrors(null);
            }
        }

    }