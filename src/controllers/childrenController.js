const Children = require("../models/Children");
const Parent = require("../models/Parent");

exports.getChildrenByParent = async (req, res) => {
    const { parentId } = req.params;
    try {
        const parent = await Parent.findById(parentId);
        if(!parent) return res.status(400).json({error: 'Categoría padre no existe'});
        const childrens = await Children.find({parentId});
        return res.status(200).json(childrens)
    } catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
}

exports.createChildren = async (req, res) => {
    const { name, parentId } = req.body;
    try {
        const parent = await Parent.findById(parentId);
        if(!parent) return res.status(400).json({error: 'Categoría padre no existe'});
        const children = new Children({name, parentId});
        await children.save();
        return res.status(201).json(children)
    } catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
}