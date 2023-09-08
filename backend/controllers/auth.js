// import des modules nécessaires

// ==============================)>
const crypt = require ('crypt')
const jwt = require('jsonwebtoken')

const DB = require('../db.config')
const User = DB.User


exports.login = async (req, res) => {
    const { email, password } = req.body

    if( !email || !password) {
        return res.statu(400).json({ message: 'Mauvais email ou mot de passe'})
    }

    try{
        let user = await User.findOne({where: {email: email}, raw: true})
        if(user === null) {
            return res.status(401).json({
                message: 'ce compte nexist pas'
            })
        }

        let test = await User.checkPassword(password, user.password)
        if(!test) {
            return res.status(401).json({ message: 'Wrong password' })
        }

        const token = jwt.sign({
            id: user.id,
            nom: user.nom,
            prenom: user.prenom,
            email: user.email,
        }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_DURING })

        return res.json({access_token: token})
    }catch(err) {
        if(err.name == 'SequelizeDatabaseError'){
            res.status(500).json({ message: 'Database Error', error:  err })
        }
        res.status(500).json({ message : 'Login process failed', error: err})
    }

}