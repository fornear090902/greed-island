
export class Level {

    constructor (
        private value: number
    ) {}

    format() {
        return 'Lv.' + this.value
    }

}