const  mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  uomSchema = new Schema(
    {
        uom: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 1
        } 
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Uom', uomSchema);