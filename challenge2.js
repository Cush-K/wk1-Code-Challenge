function speeding(speed){
    let speedLimit = 70;
    if(speed<=70){
        console.log(`Ok`)
    }
    else if
        (speed>70){
        //    let demerits = [];
                let points = (speed - speedLimit)/5;
                // demerits.push(points);
               
                if(points >=0 && points < 12){
                console.log(`You have earned ${points} Demerit Points.` + 'Your total points are now ${demerits}')
                }
                else if (points>=12){
                    console.log(`License Suspended`);
                }
                return points;
            }
        }

speeding();
