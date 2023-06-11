export interface StructureInterface {
    id:string
    banked_track: {
        governing_body: string,
        governing_body_inception: number,
        founding_leagues: string[]
    }
    flat_track: {
        junior_derby: {
            governing_body: string,
            governing_body_inception: number

        }
        womens_derby: {
            governing_body: string,
            governing_body_inception: number,
            divisions: string[]
        }
        mens_derby: {
            governing_body: string,
            governing_body_inception: number
        }
    }
}