import { model, Schema } from "mongoose";

const chamberSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  network: {
    type: String,
    required: true,
  },
  //customers: [{ type: Schema.Types.ObjectId, ref: "Customer" }],
});

export const Chamber = model("Chamber", chamberSchema);
