export interface OfficialsInterface {
    _id: string,
    types: string[],
    program_certifications: {
        Level_1: string,
        Level_2: string,
        Level_3: string
    },
    referees: {
        head_referee: {
            amount: number,
            role: string
        },
        pack_referee: {
            amount: number,
            role: string
        },
        jammer_referee: {
            amount: number,
            role: string
        }

    },
    non_skating_officials: {
        scorekeepers: {
            amount: number,
            role: string
        },
        penalty_trackers: {
            amount: number,
            role: string
        },
        penalty_box_manager: {
            amount: number,
            role: string
        },
        penalty_box_timer: {
            amount: number,
            role: string
        },
        jam_timer: {
            amount: number,
            role: string
        },
        lineup_tracker: {
            amount: number,
            role: string
        },
        scoreboard_operator: {
            amount: number,
            role: string
        }
    }
}