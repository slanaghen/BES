var mongoose = require('mongoose');

var pageSchema = mongoose.Schema({
        page: String,
        cadNo: { type: String, required: true, unique: true },
        cadCode: String,
        description: String,
        address: String,
        city: String,
        county: String,
        state: String,
        zip: Number,
        lat: Number,
        lng: Number,
        building: String,
        apt: String,
        location: String,
        info: String,
        time: { type: Date, default: Date.now },
        units: Array,
        received: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('page', pageSchema)
