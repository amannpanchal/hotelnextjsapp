const mongoose = require('mongoose');
const mongoUri =
  "mongodb+srv://amanpanchal144:amanpanchal144@cluster0.yesorgn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
exports.connectDB = () => {
    mongoose.connect(mongoUri).then(() => {
        console.log('The database is connected')
    }).catch((e) => {
        console.log('the error in database is', e);
    })
}
