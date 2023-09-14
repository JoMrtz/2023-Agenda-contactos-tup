import { Injectable } from '@angular/core';
import { Contacto } from '../interfaces/contacto';
import { API } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  create(){
    throw("Método no implementado");
  };

  delete(){
    throw("Método no implementado");
  };
  
  edit(){
    throw("Método no implementado");
  };
  
  async getAll():Promise<Contacto[]>{
    const res = await fetch(API+"contactos.json");
    const resJson = await res.json();
    return resJson;
  };
  
  async getById(id:number | string):Promise<Contacto | undefined>{
    const contactos = await this.getAll()
    return contactos.find(contacto => contacto.id == id);
  };

}
