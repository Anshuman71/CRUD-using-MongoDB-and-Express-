import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AttendanceSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      unique: true,
    },
    count: {
      type: Number,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    attendees: {
      type: [String],
      required: true
    }
  },
  { timestamps: true },
);
export default mongoose.model('Attendance', AttendanceSchema);
