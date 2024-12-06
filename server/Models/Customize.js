const mongoose = require("mongoose");

const CustomizeSchema = new mongoose.Schema(
  {
    slideImage: {
      type: String,
    },
    firstShow: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const CustomizeModel = mongoose.model("Customizes", CustomizeSchema);
module.exports = CustomizeModel;
