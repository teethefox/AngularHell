
export class Product {
    constructor(
        public title: string=" ",
        public id: number=Math.floor(Math.random() * 10000) + 1,
        public price: number=0,
        public image: string= null
    ){}
}
