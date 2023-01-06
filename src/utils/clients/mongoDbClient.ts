// import mongoose from "mongoose";
import { MongoClient, Db, Collection, Filter, ObjectId } from "mongodb";

export default class MongoDBClient {
    private client: MongoClient;
    private db: Db;
    private connectionEndpoint: string;
    private collection: Collection;
    // private tableName: string;

    constructor(tableName: string) {
        // this.tableName = tableName;
        this.connectionEndpoint = process.env.DB_CONN_STRING;
        this.client = new MongoClient(this.connectionEndpoint);
        this.client.connect();
        this.db = this.client.db(process.env.DB_NAME);
        this.collection = this.db.collection(tableName);

        // this.client.on("error", console.log.bind(console, "Erro de conexão"))
        // this.client.once("open", () => {
        //     console.log("Conexão efetuada com sucesso");
        // });
    }

    private convertIdToMongoObjectId(body: any): any {
        // let obj =  {...body};
        let objId: ObjectId;
        if (body.id) {
            objId = new ObjectId(body.id);
            // body._id = objId;
            delete body.id;
            return {_id: objId, ...body};
        }
        return body;
    }

    public async findFirst(filter: any): Promise<any | null> {
        return await this.collection.findOne(this.convertIdToMongoObjectId(filter));
    }

    public async findAll(filter: any): Promise<any | null> {
    // public async findAll(filter: Filter<Document>): Promise<any | null> {
        return await this.collection.find(this.convertIdToMongoObjectId(filter));
    }

    public async update(filter: any): Promise<any | null> {
        // return await this.collection.updateOne(filter, )
        return null;
    }

    public async save(obj: any): Promise<any | null> {
        let result = await this.collection.insertOne(obj);
        return result;
    }
}
