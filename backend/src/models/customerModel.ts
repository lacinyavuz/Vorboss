import { model, Schema } from "mongoose";

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
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
  chambers: [{ type: Schema.Types.String, ref: "Chamber" }],
  diverse: {
    type: Boolean,
    required: false,
  },
});

export const Customer = model("Customer", customerSchema);
