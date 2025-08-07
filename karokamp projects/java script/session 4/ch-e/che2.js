const daynumber = 4;

console.log(`Day number: ${daynumber}`);

switch (daynumber) {
    case 1:
        console.log("Monday - Start of the work week!");
        break;
    case 2:
        console.log("Tuesday - Keep going!");
        break;
    case 3:
        console.log("Wednesday - Hump day!");
        break;
    case 4:
        console.log("Thursday - Almost there!");
        break;
    case 5:
        console.log("Friday - TGIF!");
        break;
    case 6:
        console.log("Saturday - Weekend time!");
        break;
    case 7:
        console.log("Sunday - Rest day!");
        break;
    default:
        console.log("Eror: Invalid day number");
        break;
}
