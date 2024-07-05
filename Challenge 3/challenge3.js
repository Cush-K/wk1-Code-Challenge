const salo = prompt(`Please enter your Salary`)

function paye(salary) {
    const second = 8333; //range betweeen 24,000 & 32,333
    const third = 467667; //Range between 32,333 & 500,000
    const fourth = 300000; // Range between 500,000 & 800,000
    function nssf (salary){if(salary>0 && salary <= 36000){
        return .06*salary
    }else{
       return 2160;
    }
    }
    const nssfAmount = nssf(salary)
    const taxablePay = (salary - nssfAmount);
    const tierTwo = (taxablePay - 24000); //Tier with 25% taxation
    const tierThree = (tierTwo - second); //Tier with 30% taxation
    const tierFour = (tierThree - third); //Tier with 32.5% taxation
    const tierFive = (tierFour - fourth); //Tier with 35% taxation
    let range1 = (24000 * .1); //maximum taxable amount for range 0 to 24,000
    let range2A = (tierTwo * .25); //tax on taxable pay less than "second" above
    let range2B = second * .25; //maximum taxable amount for "second" above
    let range3A = (tierThree * .3); //tax on taxable pay less than "third" above
    let range3B = third * .3; //maximum taxable amount for "second" above
    let range4A = (tierFour * .325); //tax on taxable pay less than "fourth" above
    let range4B = fourth * .325;//maximum taxable amount for "fourth" above
    let range5 = tierFive * .35; //tax on taxable pay greater than 800,000
    let tax2 = (range1 + range2A);
    let tax3 = (range1 + range2B);
    let tax4 = (tax3 + range3A);
    let tax5 = (tax3 + range3B);
    let tax6 = (tax5 + range4A);
    let tax7 = (tax5 + range4B);
    let tax8 = (tax7 + range5);

    // console.log(`Taxable Pay:` + taxablePay);
    


    if (taxablePay > 0 && taxablePay < 24000) {
        return 0;
    } else if (taxablePay === 24000) {
        return (range1-2400);
    }else if (tierTwo <= second) {
        return (tax2-2400);
    }else if (second > tierTwo) {
        return (tax3-2400);
    }else if (tierThree <= third) {
        return (tax4-2400);
    }else if (third > tierThree) {
        return (tax5-2400);
    }else if (tierFour <= fourth) {
        return (tax6-2400);
    }else if (fourth > tierFour) {
        return (tax7-2400);
    }else if (tierFive > 0) {
        return (tax8-2400);
    }
    return 
}
// console.log(`Tax After Relief: ` + paye(30000));


function nhif (salary){
    if (salary >0 && salary <= 5999){
        return 150;
    }else if(salary >5999 && salary <= 7999){
        return 300;
    }else if(salary >7999 && salary <= 11999){
        return 400;
    }else if(salary >11999 && salary <= 14999){
        return 500;
    }else if(salary >14999 && salary <= 19999){
        return 600;
    }else if(salary >19999 && salary <= 24999){
        return 750;
    }else if(salary >24999 && salary <= 29999){
        return 850;
    }else if(salary >29999 && salary <= 34999){
        return 900;
    }else if(salary >34999 && salary <= 39999){
        return 950;
    }else if(salary >39999 && salary <= 44999){
        return 1000;
    }else if(salary >44999 && salary <= 49999){
        return 1100;
    }else if(salary >49999 && salary <= 59999){
        return 1200;
    }else if(salary >59999 && salary <= 69999){
        return 1300;
    }else if(salary >69999 && salary <= 79999){
        return 1400;
    }else if(salary >79999 && salary <= 89999){
        return 1500;
    }else if(salary >89999 && salary <= 99999){
        return 1600;
    }else{
        return 1700;
    }
}

// console.log(`NHIF:` + nhif(500000));


function netSalary(sal){
    function nssf (salary){if(salary>0 && salary <= 36000){
        return .06*salary
    }else{
       return 2160;
    }
    }
    const nssfAmount = nssf(sal)
    const nhifAmount = nhif(sal);
    const housingLevy = (.015*sal);
    const housingRelief = Math.ceil((.15*housingLevy));
    const nhifRelief = Math.ceil((.15*nhifAmount));
    const payeAmount = Math.round((paye(sal)-(housingRelief+nhifRelief))*100)/100;
    const net = sal - (payeAmount + nhifAmount + housingLevy+nssfAmount)
    
alert(`NSSF: ` +nssfAmount)
alert(`Taxable Pay:` + `${sal-nssfAmount}`);
alert(`Paye: ` +payeAmount);
alert(`NHIF: ` +nhifAmount);
alert(`Housing Levy: ` +housingLevy);
alert(`Housing Relief: ` +housingRelief);
alert(`NHIF Relief: ` +nhifRelief);


    return net;
}


alert(`Your Net Salary: ` +netSalary(salo));
