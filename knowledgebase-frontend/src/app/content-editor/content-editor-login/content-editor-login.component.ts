import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthorizeService} from '../../services/authorize.service';

@Component({
    selector: 'app-content-editor-login',
    templateUrl: './content-editor-login.component.html',
    styleUrls: ['./content-editor-login.component.css']
})
export class ContentEditorLoginComponent implements OnInit {
    loginFormGroup: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private authorizeService: AuthorizeService,
                ) {
        this.loginFormGroup = formBuilder.group({
            email: [''],
            password: ['']
        });
    }

    ngOnInit(): void {
    }

    submitLogin(): void {
        const email = this.loginFormGroup.get('email').value;
        const password = this.loginFormGroup.get('password').value;
        this.authorizeService.login(email, password)
            .subscribe(value => {
                console.log('login success: ' + JSON.stringify(value));
                if (value.access_token !== undefined &&
                    value.access_token !== null) {
                    localStorage.setItem('access_token', value.access_token);
                    localStorage.setItem('refresh_token', value.refresh_token);
                    this.router.navigate(['wearablecategory'], {relativeTo: this.activatedRoute});
                } else {
                    console.log('login error: ' + value.error);
                }
            });
    }
}
