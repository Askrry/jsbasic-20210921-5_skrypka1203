let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};



function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (typeof salaries[key] === 'number' && !isNaN(salaries[key]) && salaries[key] != Infinity && salaries[key] != -Infinity) {
      sum += salaries[key];
    } else if (salaries[key] === 0) {
      return 0;
    }
  }
  return sum; 
}