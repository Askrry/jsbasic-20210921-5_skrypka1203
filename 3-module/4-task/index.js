function showSalary(users, age) {

  let ageFilter = users.filter(item => (item["age"] <= age));
  let ageAndSalary = ageFilter.reduce((item, current) => item + current["name"] + ", " + current["balance"] + "\n", "");

  return ageAndSalary.slice(0, -1);

}
