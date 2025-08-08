import { computed, Injectable, signal } from '@angular/core';
import { USERS } from '../Shared/data';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
currentuser = signal<{username: string, role: string} | null>(null);
isAuthenticated = computed(() => this.currentuser != null);

   constructor() {
    const user = localStorage.getItem('user');
    if (user) this.currentuser.set(JSON.parse(user));
  }


   login(username: string, password: string) : boolean
   {
      const userFound = USERS.find(p => p.username ==username && p.password == password);

      if(userFound){
      this.currentuser.set({ username: userFound?.username, role: userFound?.role });
        localStorage.setItem('user',JSON.stringify(this.currentuser));
      return true;
      }
    return false;
   }

   logout(){
    this.currentuser.set(null);
    localStorage.removeItem('user');
   }

   


}
