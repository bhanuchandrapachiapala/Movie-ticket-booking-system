let mongoose = require('mongoose');

let RowSchema = new mongoose.Schema({
	numberOfSeats: {
		type: Number,
    required: true
	},
	aisleSeats: {
		type: [Number],
    default: []
	},
	reservedSeats: {
		type: [Number],
    default: []
	}
});

let ScreenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  seatInfo: {
    type: Map,
		of: RowSchema,
    required: true
  }
});

let Screen = mongoose.model('Screen', ScreenSchema);

module.exports = {Screen}
