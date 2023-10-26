import { Injectable, inject } from '@angular/core';
import { Contacto } from '../interfaces/contacto';
import { API } from '../constants/api';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  auth = inject(AuthService);

  async create(contacto:Contacto):Promise<boolean>{
    if(contacto.id) return false;
    const res = await fetch(API+'Contact/',{
      method:'POST',
      headers:{
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token
      },
      body: JSON.stringify(contacto)
    })
    return res.ok
  };

  async delete(id:number):Promise<boolean>{
    const res = await fetch(API+'contactos/'+id,{
      method:'DELETE',
      headers:{
        Authorization: "Bearer "+this.auth.token
      },
    })
    return res.ok
  };
  
  async edit(contacto:Contacto):Promise<boolean>{
    if(!contacto.id) return false;
    const res = await fetch(API+"Contact/"+contacto.id,{
      method:'PUT',
      headers:{
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token
      },
      body: JSON.stringify(contacto)
    })
    return res.ok
  };
  
  async getAll():Promise<Contacto[]>{
    const res = await fetch(API+"Contact",{
      headers: {
        Authorization: "Bearer "+this.auth.token
      }
    });
    const resJson = await res.json();
    return resJson;
  };
  
  async getById(id:number | string):Promise<Contacto | undefined>{
    const res = await fetch(API+"Contact/"+id,{
      headers: {
        Authorization: "Bearer "+this.auth.token
      }
    });
    const resJson = await res.json();
    return resJson[0];
  };

}
