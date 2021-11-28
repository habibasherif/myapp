const mongoose= require ('mongoose');
const Schema= mongoose.Schema;

const FlightSchema = new Schema (
    {
        Flight_Number :{type : Number , Required : true},
       From:{ type: String, required: true },
       To:{ type: String, required: true },
       Departure_Time : {type : String , required : true},
       Arrival_Time : {type:String , required:true},
       Flight_Date:{ type: String, required: true },
       Cabin:{ type: String, required: true },
       Seats_Available:{ type: Number, required: true }
    }, {
        timestamps: true,
    }
);

const Flights= mongoose.model('FLight', FlightSchema);
module.exports = Flights;
