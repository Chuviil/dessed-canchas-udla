import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
  email: { type: String, required: true },
  date: { type: Date, required: true },
  cancha_id: { type: String, enum: ['GR', 'ARE', 'UP'], required: true },
  state: { type: String, enum: ['PENDING', 'ACCEPTED', 'REJECTED'], default: 'PENDING' },
}, { timestamps: true });

export default mongoose.models.Reservation || mongoose.model('Reservation', ReservationSchema);
