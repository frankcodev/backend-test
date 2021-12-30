const Parent = require('../models/Parent')

exports.getParents = async (req, res) => {
    try {
        const parents = await Parent.find();
        return res.status(200).json(parents)
    } catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
}

exports.createParent = async (req, res) => {
    const {description} = req.body;
    const {userId} = req;
    try {
        const parent = new Parent({description, userId});
        await parent.save();
        return res.status(201).json(parent)
    } catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
}