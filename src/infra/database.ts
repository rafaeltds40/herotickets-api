import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://rafaeltds:wMWLXB2CnkekkXCS@cluster0.pylabls.mongodb.net/hero-tickets'
        );
        //console.log('database connection is ok');
    } catch (error) {
        console.log('error database connection');
    }
};

