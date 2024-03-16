const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim : true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique : [true, 'Email is not unique']
        
    },
    password: {
        type: String,
        required: true,
        trim : true
    }


}, {
    timestamps : true
})
export default mongoose.models?.User || mongoose.model("User", userSchema)