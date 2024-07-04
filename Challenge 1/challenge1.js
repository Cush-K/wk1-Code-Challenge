// function that prompts user to input student marks
// input should be between 0 & 100
// input to correspond with correct grade
// A > 79, B - 60 to 79, C - 59 to 49, D - 40 to 49, E < 40

let grades = prompt(`Please enter the Student's Grade`)
function grading(grade){
    
    switch(true){
        case grade>=79 && grade<=100:
            return `${grade} is an A`;
        break;
        case grade>=60 && grade<79:
            return `${grade} is a B`
        break;
        case grade>=50 && grade<60:
            return `${grade} is a C`
        break;
        case grade>=40 && grade<50:
            return `${grade} is a D`
        break;
        case grade>=0 && grade<40:
            return `${grade} is an E`
        break;
        default:
            return `Please enter a number between 0 and 100`;
    }
    
}
    alert(grading(grades));