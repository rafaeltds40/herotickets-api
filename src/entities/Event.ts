import { Location } from "./Location";
import { Price } from "./Price";
import { User } from "./User";

class Event {

    constructor(
        public title: String,
        public description: String,
        public date: Date,
        public banner: String,
        public coupons: String[],
        public price: Price[],
        public participants: User[],
        public location: Location,
        public city: String
    ) {

    }

}

export  { Event };