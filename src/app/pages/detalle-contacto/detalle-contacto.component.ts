import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacto } from 'src/app/interfaces/contacto';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.component.html',
  styleUrls: ['./detalle-contacto.component.scss']
})
export class DetalleContactoComponent implements OnInit{
  contactsService = inject(ContactsService);
  activatedRoute = inject(ActivatedRoute)

  contacto:Contacto = { 
    id: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    email: '',
    img: '',
    telefono: '',
    empresa: ''
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.contactsService.getById(params['id']).then(res => {
        if(res) this.contacto = res;
      })
    })

    
  }
  

}
