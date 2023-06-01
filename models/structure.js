const mongoose = require('mongoose');

const structureSchema = new mongoose.Schema({
    modern_banked_track: {
        governing_body: String,
        governing_body_inception: String,
        founding_leagues: [String]
    },
    flat_track: {
        junior_derby: {
            governing_body: String,
            governing_body_inception: String

        },
        womens_derby: {
            governing_body: String,
            governing_body_inception: String,
            divisions: [String]
        },
        mens_derby: {
            governing_body: String,
            governing_body_inception: String
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
                amount: String,
                role: String
            },
            pack_referee: {
                amount: String,
                role: String
            },
            jammer_referee: {
                amount: String,
                role: String
            }
        },
        non_skating_officials: {
            scorekeepers: {
                amount: String,
                role: String
            },
            penalty_trackers: {
                amount: String,
                role: String
            },
            penalty_box_manager: {
                amount: String,
                role: String
            },
            penalty_box_timer: {
                amount: String,
                role: String
            },
            jam_timer: {
                amount: String,
                role: String
            },
            lineup_tracker: {
                amount: String,
                role: String
            },
            scoreboard_operator: {
                amount: String,
                role: String
            }
        }
    }
});

module.exports = mongoose.model('structure', structureSchema);