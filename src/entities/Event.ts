import { Location } from "./Location";
import { Price } from "./Price";
import { User } from "./User";

class Event {

    constructor(
        public title: string,
        public description: string,
        public date: Date,
        public banner: string,
        public flyers: string[],
        public coupons: string[],
        public price: Price[],
        public participants: User[],
        public location: Location,
        public city: string
    ) {

    }

}

export  { Event };