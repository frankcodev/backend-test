const { Schema, model} = require("mongoose");

const ParentSchema = new Schema(
  {
    description: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User'},
  },
  { timestamps: true }
);

module.exports = model("Parent", ParentSchema);
