const maxDaysInMonth = (day) => {
    if (day < 1 || day > 31) {
      return 0;
    }
    return day;
};  

const maxMonthInYear = (month) => {
    if (month < 1 || month > 12) {
      return 0;
    }
    return month;
};
  
const maxYearsInDecade = (year) => {
    if (year < 1000 || year > 9999) {
      return 0;
    }
    return year;
};
  
let dayC = maxDaysInMonth()
let monthC = maxMonthInYear()
let yearC = maxYearsInDecade()

const testDate = (day, month, year) => {
    return maxDaysInMonth(day) && maxMonthInYear(month) && maxYearsInDecade(year)
}

console.log(`La date est valide : ${testDate(14, 2, 1995)}`);


// if (month = [1, 3, 5, 7, 8, 10, 12]) {
//         return 31} else {
//             return 30
// }


