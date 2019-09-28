const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Nilson:nilson170821@idk-rat13.mongodb.net/vehicle-manager?retryWrites=true&w=majority', { useNewUrlParser: true });

module.exports = mongoose;