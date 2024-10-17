import Score from "./Score";

export default interface MemberInfo{
    dni: string;
    name: string;
    surname: string;
    shift: string;
    provisionalScore?: Score;
    finalScore: Score;
}