import Attendance from '../model/index.mjs';

export const addAttendance = async (req, res) => {
  const attendance = new Attendance(req.body);
  try {
    return res.status(201).json({ Attendance: await attendance.save() });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Couldn\'t able to save the Attendance. ${error}`,
    });
  }
};

export const getAllAttendance = async (req, res) => {
  try {
    const results = await Attendance.find();
    return res.status(200).json({ results});
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Couldn\'t able to save the Attendance. ${error}`,
    });
  }
}
