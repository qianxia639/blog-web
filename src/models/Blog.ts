import { Tag } from "./Tag";
import { User } from "./User";

export class Blog {

    constructor(
        public id = 0,
        public type_name = '',
        public nickname = '',
        public title = '',
        public content = '',
        public views = 0,
        public updated_at = 0,
        public user = new User(),
        public tag = [new Tag()]
    ) { }

}