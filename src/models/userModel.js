import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema( {
    matricula: {
        type: String,
        required: true,
        trim: true,

    },
    password: {
        type: String,
        required: true,
        trim: true,
        
    },
    current_sesion: {
        type: String,
        required: true,
        trim: true,
        
    },
    token: {
        type: String,
        required: true,
        trim: true,  
    },
},{
    versionKey: false,
    timestamps: true
});

UserSchema.methods.encryptPassword = async(paswword) => {
    const salt = await bcrypt.genSalt(10);
    return  bcrypt.hash(password, salt);
};

UserSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

export default model('users', UserSchema );