const speeder = prompt(`Enter the speed of the car`)

function speeding(speed){
    let speedLimit = 70;
    if(speed<=70){
        return `Ok`
    }
    else if
        (speed>70){
         let points = (speed - speedLimit)/5;
                             
                if(points >=0 && points < 12){
                    return `You have earned ${points} Demerit Points.` 
                }else if (points>=12){
                    return `License Suspended`;
                }
                return points;
            }
        }

alert(speeding(speeder));
