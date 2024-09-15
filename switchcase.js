//Basic Switch Case: Write a function `getDayOfWeek(dayNumber)` that uses a `switch` case to return the name of the day based on its number (1 for Monday, 2 for Tuesday, etc.).**

//javascript
function getDayOfWeek(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        case 7:
            dayName = 'Sunday';
            break;  
        default: 
          dayName='Invalid Day Number'
          break;  
    }
    return dayName ;
}

console.log(getDayOfWeek(3)); // Output should be "Wednesday"


//2. **Switch with Fall-through: Modify the previous function so that if the day number is `6` or `7`, it returns "Weekend." Ensure that falls through to `case` `7` to return the same result.**

//javascript
function getDayOrWeekend(dayNumber) {
    switch (dayNumber) {
        case 1: 
          return "Monday";
        case 2: 
      return "Tuesday";       
    case 3: 
      return "Wednesday";
    case 4:   
      return "Thursday";
    case 5 :   
      return"Friday";    
    case 6 :     
    case 7 :
         return'Weekend';          
        default :
           return'Invalid Day Number';        
   } 
}
console.log(getDayOrWeekend(6)); // Output should be Weekend