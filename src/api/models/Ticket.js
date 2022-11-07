const mongoose = require('mongoose');
const TicketSchema = new mongoose.Schema(
  {
    movie_id: {
      type: String,
      required: true,
    },
    customer_id: {
      type: String,
      required: true,
    },
    seat_number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", TicketSchema);
