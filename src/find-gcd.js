const findGcd = (num1, num2) => (num2 ? findGcd(num2, num1 % num2) : num1);
export default findGcd;
