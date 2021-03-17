// Import player model
Players = require('./playersModel');
// Handle index actions
exports.index = function (req, res) {
    Players.get(function (err, players) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Players retrieved successfully",
            data: players
        });
    });
};
// Handle create player actions
exports.new = function (req, res) {
    var players = new Players();
    players.player_name = req.body.player_name ? req.body.player_name : players.player_name;
    players.age = req.body.age;
    players.position = req.body.position;
    players.runs = req.body.runs;
    players.average = req.body.average;
    players.highest_score = req.body.highest_score;
// save the player and check for errors
    players.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New players created!',
            data: players
        });
    });
};
// Handle view players info
exports.view = function (req, res) {
    Players.findById(req.params.players_id, function (err, players) {
        if (err)
            res.send(err);
        res.json({
            message: 'Players details loading..',
            data: players
        });
    });
};
// Handle update players info
exports.update = function (req, res) {
Players.findById(req.params.players_id, function (err, players) {
        if (err)
            res.send(err);
players.player_name = req.body.player_name ? req.body.player_name : players.player_name;
players.age = req.body.age;
players.position = req.body.position;
players.runs = req.body.runs;
players.average = req.body.average;
players.highest_score = req.body.highest_score;
// save the players and check for errors
        players.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Players Info updated',
                data: players
            });
        });
    });
};
// Handle delete players
exports.delete = function (req, res) {
    Players.remove({
        _id: req.params.players_id
    }, function (err, players) {
        if (err)
            res.send(err);
res.json({  
            status: "success",
            message: 'Players deleted'
        });
    });
};