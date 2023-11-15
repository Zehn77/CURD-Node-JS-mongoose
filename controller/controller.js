const PhoneSchema = require('../models/model')
const bcrypt = require('bcrypt')

const getPhones = async (req, res) => {
    const phones = await PhoneSchema.find()
    // return await res.send(phones)
    return await res.json(phones)
}

const addPhone = async (req, res) => {
    const newItem = new PhoneSchema({
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    
    await newItem.save()
        .then((item) => {
            console.log('Item added:', item);
        })
        .catch((error) => {
            console.error('Failed to add item:', error);
        });

    return await res.send(newItem)
}

const removePhone = async (req, res) => {
    console.log(req.body)
    return await res.send('Phone removed')
}

module.exports = {
    getPhones,
    addPhone,
    removePhone
}

// const passwordIsValid = bcrypt.compareSync(password, hashedPassword)
