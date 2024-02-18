import Registrations from "../models/registrations.js";

// Registrations Routes
export async function getRegistrations(req, res) {
  try {
    const reg = await Registrations.find();
    res.json(reg);
  } catch (error) {
    res.json(error);
  }
}

export async function storeRegistrations(req, res) {
  try {
    const {
      first_name,
      last_name,
      email,
      contact,
      college_name,
      college_department,
      event_name,
      payment_id,
      team_members,
      teammember1,
      teammember2,
      teammember3,
      is_team_event,
      payment_screenshot,
    } = req.body;

    const reg = await Registrations.create({
      first_name,
      last_name,
      email,
      contact,
      college_name,
      college_department,
      event_name,
      payment_id,
      team_members,
      teammember1,
      teammember2,
      teammember3,
      is_team_event,
      payment_screenshot,
    });

    res.json(reg);
  } catch (error) {
    res.json(error);
  }
}

export async function deleteRegistrations(req, res) {
  try {
    const { email } = req.body;
    await Registrations.deleteMany();
  } catch (error) {
    res.json(error);
  }
}
