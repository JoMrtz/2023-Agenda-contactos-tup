import { Component, Signal, WritableSignal, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterData } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  authService = inject(AuthService)
  router = inject(Router);
  errorRegister: WritableSignal<boolean> = signal(false)

  registerData: RegisterData = {
    nombreDeUsuario: "",
    nombre: "",
    apellido: "",
    contrasenia: "",
  }

  async register(){
    this.errorRegister.set(false);
    const res = await this.authService.register(this.registerData);
    if(res.ok) {
      this.router.navigate(["/login"])
    }
    else {
      this.errorRegister.set(true);
    }
  }
}
