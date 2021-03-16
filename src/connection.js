import mongoose from 'mongoose';
import config from './config';

(async () => {
    await mongoose.connect( config.mongodbURL , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then( db => console.log(`Success connection`) );
})();