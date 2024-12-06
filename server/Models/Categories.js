const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    cName: {
      type: String,
      required: true,
    },
    cDescription: {
      type: String,
      required: true,
    },
    cImage: {
      type: String,
    },
    cStatus: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model("Categories", CategorySchema);
module.exports = CategoryModel;
