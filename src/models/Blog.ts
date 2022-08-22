export class Blog {

    constructor(
        public id: number,
        public type_name: string,
        public title: string,
        public content: string,
        public flag: string,
        public views: number,
        public updated_at: number,
    ) { }

}