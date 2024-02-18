import mongoose from "mongoose";
const { Schema } = mongoose;

const registrationsSchema = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: Number,
  college_name: {
    type: String,
  },
  college_department: {
    type: String,
  },
  current_year: {
    type: String,
  },
  event_name: {
    type: String,
  },
  payment_id: {
    type: String,
    unique: true,
  },
  team_members: {
    type: Array,
    default: [],
  },
  teammember1: String,
  teammember2: String,
  teammember3: String,
  is_team_event: Boolean,
  payment_screenshot: {
    type: String,
    unique: true,
  },
});

const RegistrationsModel = mongoose.model("Registrations", registrationsSchema);

export default RegistrationsModel;
