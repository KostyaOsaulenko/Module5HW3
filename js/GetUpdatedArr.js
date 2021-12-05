function box()
{
    let array = [];
    return (input) => 
    {
        if (input)
        {
            array.push(input);
        }
        else
        {
            array = [];
        }
        return array;
    }
}
let getUpdatedArr = box();
console.log(getUpdatedArr(3));
console.log(getUpdatedArr(5));
console.log(getUpdatedArr({name: 'Vasya'}));
console.log(getUpdatedArr());
console.log(getUpdatedArr(4));