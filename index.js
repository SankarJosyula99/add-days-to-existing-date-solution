var addDays = require("date-fns/addDays");
var format = require("date-fns/format");
const result = (days) => {
  const finalResult = addDays(new Date(2020, 7, 22), 10);
  const final = format(finalResult, "dd-MM-yyyy");
  return final;
};
const result1 = result(10);
console.log(result1);
module.exports = result;
