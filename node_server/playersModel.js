var mongoose = require('mongoose');
// Setup schema
var playersSchema = mongoose.Schema({
    position: {
        type: String,
        required: true
    },
    player_name: {
        type: String,
        required: true
    },
    matches: String,
    runs: String,
    highest_score: String,
    average: String,
    strike_rate: String,
    appearance_of_workcup: String,  
});
// Export Players model
var Players = module.exports = mongoose.model('players', playersSchema);
module.exports.get = function (callback, limit) {
    Players.find(callback).limit(limit);
}