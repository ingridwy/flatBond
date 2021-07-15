var mongoose = require("mongoose")
var Schema = mongoose.Schema
const clientSchema = new Schema({
    name: String,
    config: {
        has_fixed_membership_fee : Boolean,
        fixed_membership_fee_amount : Number,
    },
    division: [{ type:  Schema.Types.ObjectId, ref: 'Division'}]
});
module.exports =  mongoose.model('Client', clientSchema)