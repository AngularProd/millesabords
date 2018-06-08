import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Users } from '../../_models/users';


@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  /* getAll() {
    return this.http.get<Users[]>('/api/users');
  } */

  /* getById(id: number) {
    return this.http.get('/api/users/' + id);
  } */

  create(user: Users) {
    // return this.http.post('https://www.aretmic.com/api/server/web/app_dev.php/users', user);
    return this.http.post('http://jsonplaceholder.typicode.com/users', user);
  }

  /* update(user: Users) {
    return this.http.put('/api/users/' + user.id, user);
  } */

  /* delete(id: number) {
    return this.http.delete('/api/users/' + id);
  } */
}
