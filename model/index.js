import mongoose, { Schema } from 'mongoose';

const AppInfoSchema = new Schema(
  {
    packageName: {
      type: String,
      required: true,
      unique: true,
    },
    imageUrl: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);
export default mongoose.model('AppInfo', AppInfoSchema);
