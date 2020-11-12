export class UserService {

    _url = 'https://jsonplaceholder.typicode.com'

    async   getAllUsers(){
        return  await  fetch(`${this._url}/users`).then(value => value.json());
    };
    async   getUserWithId(id){
        return  await  fetch(`${this._url}/users/${id}`).then(value => value.json());
    };
}
