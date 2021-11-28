const mongoose= require ('mongoose');
const Schema= mongoose.Schema;

const AdminSchema = new Schema (
    {
       
       Username:{ type: String, required: true },
      
    }, {
        timestamps: true,
    }
);

const Admins= mongoose.model('Admin', AdminSchema);
module.exports = Admins;
