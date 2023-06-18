import mongoose from "mongoose";
import {MongoMemoryServer} from "mongodb-memory-server-core";

const connect = async () => {
    const mongoD = await MongoMemoryServer.create();
    const getUri = mongoD.getUri();

    const Db = await mongoose.connect(getUri);
    console.log('Database has been connected');

    return Db;
}

export default connect