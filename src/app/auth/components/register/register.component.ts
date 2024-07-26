import { Component } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule],
})
export class RegisterComponent {
    form = this.fb.nonNullable.group({
        userName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
    })

    constructor(private fb: FormBuilder) {}

    onSubmit() {
        console.log(this.form.getRawValue())
    }
}
