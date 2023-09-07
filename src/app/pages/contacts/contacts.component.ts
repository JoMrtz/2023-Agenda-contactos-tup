import { Component } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  contactos:Contacto[] = [
    {
      nombre: "Gonzalo",
      apellido: "Bechara",
      direccion: "Juan Manuel de Rosas 456",
      email: 'test@test.com',
      telefono: '12345678',
      img: './../../../assets/img/logo.png',
      empresa: 'puntoJson'
    },
    {
      nombre: "Lionel",
      apellido: "Messi",
      direccion: "Pellegrini 1150",
      email: 'email@email.com',
      telefono: '123456',
      img: 'https://img.uefa.com/imgml/TP/players/2020/2022/324x324/95803.jpg',
      empresa: '-'
    },
    {
      nombre: "Sin",
      apellido: "Foto",
      direccion: "Juan Manuel de Rosas 456",
      email: 'test@test.com',
      telefono: '12345678',
      img: '',
      empresa: 'puntoJson'
    },
  ]

}