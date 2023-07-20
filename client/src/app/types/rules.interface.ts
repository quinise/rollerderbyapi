export interface RulesInterface {
    _id: string;
    description: string,
    game_parameters_and_safety: {
        timing: {
            game_duration: string,
            jam_duration: string
        },
        teams: {
            team: string,
            skater: string
        },
        timeouts: {
            team_timeouts: string,
            official_reviews: string,
            official_timeouts: string
        },
        game_information : string
    },
    gameplay: {
        track: string,
        positions : {
            definition: string,
            jammer: string,
            lead_jammer: string,
            pivot_blocker: string,
            star_pass: string,
            blockers: string
        },
        engagement_zone_and_pack: string,
        blocks_and_assists: {
            blocking: string,
            target_zones: string,
            blocking_zones: string
        },
        passing: {
            definition: string,
            jammers: string
        }
    },
    scoring: {
        earning_points: string,
        scoring_avoidance: string,
        penalized_jammers: string
    },
    penalties: {
        definition: string,
        contact_penalties: {
            definition: string,
            star_passes: string
        },
        illegal_target_zone: string[],
        presenting_target_zone: string,
        impact_with_illegal_blocking_zone: string,
        other_illegal_contact: string,
        multiplayer_blocks: string,
        game_structure_penalties: {
            definition: string,
            illegal_positioning: string,
            gaining_position: string,
            interfering_with_game: string,
            other_illegal_procedures: string
        },
        misconduct: string,
        enforcing_penalties: {
            definition: string,
            penalty_enforcement_blocker: {
                definition: string,
                seat_unavailable: string
            },
            penalty_enforcement_jammer: string
        },
        fouling_out_expulsions: {
            fouling_out: string,
            expulsion: string
        }
    },
    officiating: {
        distinction: string,
        requirements: string,
        duties: string,
        skater_official_communication: string
    },
    gear: {
        basic: string[],
        advanced: string[]
    }
}