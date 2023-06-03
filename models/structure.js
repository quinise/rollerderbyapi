const mongoose = require('mongoose');

const structureSchema = new mongoose.Schema({
    modern_banked_track: {
        governing_body: String,
        governing_body_inception: Number,
        founding_leagues: [String]
    },
    flat_track: {
        junior_derby: {
            governing_body: String,
            governing_body_inception: Number

        },
        womens_derby: {
            governing_body: String,
            governing_body_inception: Number,
            divisions: [String]
        },
        mens_derby: {
            governing_body: String,
            governing_body_inception: Number
        }
    },
    officials: {
        types: [String],
        program_certifications: {
            Level_1: String,
            Level_2: String,
            Level_3: String
        },
        referees: {
            head_referee: { 
                amount: Number,
                role: String
            },
            pack_referee: {
                amount: String,
                role: String
            },
            jammer_referee: {
                amount: Number,
                role: String
            }
        },
        non_skating_officials: {
            scorekeepers: {
                amount: Number,
                role: String
            },
            penalty_trackers: {
                amount: String,
                role: String
            },
            penalty_box_manager: {
                amount: Number,
                role: String
            },
            penalty_box_timer: {
                amount: String,
                role: String
            },
            jam_timer: {
                amount: Number,
                role: String
            },
            lineup_tracker: {
                amount: Number,
                role: String
            },
            scoreboard_operator: {
                amount: Number,
                role: String
            }
        }
    }
});

module.exports = mongoose.model('structure', structureSchema);