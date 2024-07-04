// function that prompts user to input student marks
// input should be between 0 & 100
// input to correspond with correct grade
// A > 79, B - 60 to 79, C - 59 to 49, D - 40 to 49, E < 40


function grading(grade){
    
    switch(true){
        case grade>=79 && grade<=100:
            console.log(`A`);
        break;
        case grade>=60 && grade<79:
            console.log(`B`)
        break;
        case grade>=50 && grade<60:
            console.log(`C`)
        break;
        case grade>=40 && grade<50:
            console.log(`D`)
        break;
        case grade>=0 && grade<40:
            console.log(`E`)
        break;
        default:
            console.log(`Please enter a number between 0 and 100`);
    }
    
}
    grading();