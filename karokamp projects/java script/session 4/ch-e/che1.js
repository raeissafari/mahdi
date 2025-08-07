const score = 100;

console.log(` نمره: ${score} `);

if ( score >= 90 && score <= 100 ) {

    console.log(" نمره شما: A ");
    console.log(" !قبول شدید ");
    
} else if ( score >= 80 && score <= 89 ) {

    console.log(" نمره شما: B ");
    console.log(" !قبول شدید ");

} else if ( score >= 70 && score <= 79 ) {

    console.log(" نمره شما: C ");
    console.log(" !قبول شدید ");

}else if ( score >= 60 && score <= 69 ) {

    console.log(" نمره شما: D ");
    console.log(" !مردود شدید ");

}else if ( score < 60 ) {
    
    console.log(" نمره شما: F "); 
    console.log(" !مردود شدید ");

}else {
    
    console.log(" Eror: نمره ی وارد شده اشتباه است ");
    
}