
export class User {

    constructor(
        private id: string,
        private last_name: string,
        private first_name: string
    ) {}

    get fullName() {
        return this.last_name + ' ' + this.first_name
    }
}