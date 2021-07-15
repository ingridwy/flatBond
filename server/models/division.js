var mongoose = require("mongoose")
var Schema = mongoose.Schema
const divisionSchema = new Schema({
    name: String,
    config: {
        has_fixed_membership_fee : Boolean,
        fixed_membership_fee_amount : Number
    },
    client: { type:  Schema.Types.ObjectId, ref: 'Client'},
    area: [{ type:  Schema.Types.ObjectId, ref: 'Area'}]
});
module.exports =  mongoose.model('Division', divisionSchema)