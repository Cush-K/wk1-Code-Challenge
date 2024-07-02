function paye(salary) {
    const second = 8333; //range betweeen 24,000 & 32,333
    const third = 467667; //Range between 32,333 & 500,000
    const fourth = 300000; // Range between 500,000 & 800,000
    const nssf = (.06 * salary); //6% NSSF calculation
    const taxablePay = (salary - nssf);
    const tierTwo = (taxablePay - 24000); //Tier with 25% taxation
    const tierThree = (tierTwo - second); //Tier with 30% taxation
    const tierFour = (tierThree - third); //Tier with 32.5% taxation
    const tierFive = (tierFour - fourth); //Tier with 35% taxation
    let range1A = (taxablePay * .1) //tax on taxable pay less than 24,000
    let range1B = (24000 * .1) //maximum taxable amount for range 0 to 24,000
    let range2A = (tierTwo * .25); //tax on taxable pay less than "second" above
    let range2B = second * .25; //maximum taxable amount for "second" above
    let range3A = (tierThree * .3); //tax on taxable pay less than "third" above
    let range3B = third * .3; //maximum taxable amount for "second" above
    let range4A = (tierFour * .325); //tax on taxable pay less than "fourth" above
    let range4B = fourth * .325;//maximum taxable amount for "fourth" above
    let range5 = tierFive * .35; //tax on taxable pay greater than 800,000
    let tax2 = (range1B + range2A);
    let tax3 = (range1B + range2B);
    let tax4 = (tax3 + range3A);
    let tax5 = (tax3 + range3B);
    let tax6 = (tax5 + range4A);
    let tax7 = (tax5 + range4B);
    let tax8 = (tax7 + range5);

    console.log(`Taxable Pay:` + taxablePay);


    if (taxablePay > 0 && taxablePay < 24000) {
        return range1A;
    } else if (taxablePay === 24000) {
        return range1B;
    }else if (tierTwo <= second) {
        return tax2;
    }else if (second > tierTwo) {
        return tax3
    }else if (tierThree <= third) {
        return tax4
    }else if (third > tierThree) {
        return tax5;
    }else if (tierFour <= fourth) {
        return tax6;
    }else if (fourth > tierFour) {
        return tax7;
    }else if (tierFive > 0) {
        return tax8;
    }
}
console.log(`Tax Before Relief:` + paye(700000));