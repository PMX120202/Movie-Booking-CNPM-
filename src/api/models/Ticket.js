import mongoose from "mongoose";
const TicketSchema = new mongoose.Schema(
  {
    movie_id: { 
      type: String,
      required: true,
    },
    customer_id: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    seat_number: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Sear", RoomSchema);
