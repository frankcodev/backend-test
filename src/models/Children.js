const { Schema, model} = require("mongoose");

const ChildrenSchema = new Schema(
  {
    name: { type: String, required: true },
    parentId: { type: Schema.Types.ObjectId, ref: 'Parent'},
  },
  { timestamps: true }
);

module.exports = model("Children", ChildrenSchema);
