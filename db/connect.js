const mongoose = require('mongoose');

const connectDB = (url) => {
  return (function(){
    try {
      // Connect to the MongoDB cluster
      mongoose.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected"),
      );
    } catch (e) {
      console.log("could not connect");
    }
  })();
}

module.exports = connectDB;



// mongoose.connect(connectString, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: false
// });