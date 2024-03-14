// The typescript enum type
// It's used for declaring constants 

enum Month {
    Jan,
    Feb, 
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};


function isVacMonth(month: Month){
    let isVac:boolean;

    switch(month){
        case Month.May:
        case Month.Oct:
        case Month.Nov:
        case Month.Dec:
            isVac = true;
            break;
        default:
            isVac=false;
            break;
    }

    return isVac;
}

console.log(isVacMonth(Month.Mar));
console.log(Month.Apr === 3) //prints true