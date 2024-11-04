import Score from "./Score";

export default interface NurseOpeInfo {
    dni: string;
    name: string;
    surname: string;
    shift: string;
    provisionalScore?: Score;
    finalScore: Score;
}
