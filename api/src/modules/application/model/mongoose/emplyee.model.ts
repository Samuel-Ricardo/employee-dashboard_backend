import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  admission_date: {
    type: Date,
    required: true,
  },
});

export const EmployeeModel = mongoose.model('Employee', EmployeeSchema);
