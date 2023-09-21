import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contacto } from 'src/app/interfaces/contacto';
import { FormsModule } from '@angular/forms';
import { ContactsService } from 'src/app/services/contacts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.scss']
})
export class NuevoContactoComponent {
  contactsService = inject(ContactsService);
  @Output() cerrar = new EventEmitter();

  nuevoContacto:Contacto = {
    id: 0,
    nombre: 'aa',
    apellido: 'bb',
    direccion: 'cc',
    email: 'dd',
    img: 'ee',
    telefono: 'aa',
    empresa: 'ss'
  }

  async agregarContacto(){
    const res = await this.contactsService.create(this.nuevoContacto);
    if(res){
      this.cerrar.emit();
      Swal.fire({
        title: 'Contacto agregado',
        timer: 2000,
        showConfirmButton: false,
        icon: "success",
        toast: true,
        position: 'bottom'
      })
    } else {
      this.cerrar.emit();
      Swal.fire({
        title: 'Error agregando contacto',
        icon: "error",
      })
    }
  }

}
