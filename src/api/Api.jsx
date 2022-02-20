export class Api{
    getGuests() {
        return fetch('https://gp-js-test.herokuapp.com/pizza/guests')
        .then(r => {
            if(r.ok) {
                return r.json()
            }
        });
    }
}