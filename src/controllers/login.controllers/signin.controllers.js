import User from '../../models/userModel';
import verifyToken from '../../controllers/verifyToken';

import jwt from 'jsonwebtoken';
import config from '../../controllers/confgtoken';

export const AuthSignIn = async (req, res) => {

    if(!req.body.matricula || !req.body.password){
        return res.status(400).send({
            msg: 'Content invalid'
        });
    }

    try{
        const user = await User.findOne({ matricula: req.body.matricula, password: req.body.password });
        if(!user) {
            return res.status(404).send("The matricula doesn´t existxd");
        }

        // const validPassword = await user.validatePassword( req.body.password, user.password );
        // if(!validPassword) {
        //     return res.status(401).send( {auth: false, token: null, msg: "The matricula doesn´t existdsf" })
        // }

        const token = jwt.sign(
            {
                id: user._id
            },
            config.secret, {
                expiresIn: '24h'
            }
        );
        res.status(200).json({
            atuh: true,
            token
        });
    }catch (e) {
        console.log(e);
        return res.status(500).json({
            msg: e.message || 'Something goes wrong'
        }).send();
    }
};

