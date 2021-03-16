import {config} from 'dotenv'
config();

export default {
    mongodbURL: process.env.MONGODB_URI || "mongodb+srv://encuerasu:cZfV2nNYbGbkOrMR@clusterencuera.mhpyt.mongodb.net/encuera?retryWrites=true&w=majority",
}