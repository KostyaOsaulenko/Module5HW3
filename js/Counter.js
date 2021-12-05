function counter()
{
    let  sum = 0;
    return (input) => 
    {
        sum += input;
        console.log(sum);
    }
}
var count = counter();
console.log(count(3));
console.log(count(5));
console.log(count(228));