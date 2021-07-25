import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {

  credentials: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController
    ) { }

  ngOnInit() {
    this.credentials = this.fb.group({
    email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
    password: ['cityslicka', [Validators.required, Validators.minLength(6)]],
  });
  }

  // async login() {
  //   const loading = await this.loadingController.create();
  //   await loading.present();

  //   this.authService.login(this.credentials.value).subscribe(
  //     async (res) => {
  //       await loading.dismiss();
  //       this.router.navigateByUrl('/tabs', { replaceUrl: true });
  //     }, async (res) => {
  //       await loading.dismiss();
  //       const alert = await this.alertController.create({
  //         header: 'Login failed',
  //         message: res.error.error,
  //         buttons: ['OK'],
  //       });

  //       await alert.present();
  //     }
  //   );
  // }


  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }
}
