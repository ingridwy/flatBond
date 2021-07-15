var mongoose = require("mongoose")
var Schema = mongoose.Schema
const areaSchema = new Schema({
    name: String,
    config: {
        has_fixed_membership_fee : Boolean,
        fixed_membership_fee_amount : Number,
    },
    division: { type:  Schema.Types.ObjectId, ref: 'division' },
    branch: [{ type:  Schema.Types.ObjectId, ref: 'Area'}]
});
module.exports =  mongoose.model('Area', areaSchema)