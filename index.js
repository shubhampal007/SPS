// let num=2;
// isEven(num);
// isPrime(num);

// function isEven(num)
// {
//     if(num%2==0)
//     {
//         console.log("It is Even");
//     }
//     else{
//         console.log("It is Odd");
//     }
// }
// function isPrime(num)
// {  let flag=false;
//     for(let i=2;i<=parseInt(num/2);i++)
//     {
//         if(num%i==0)
//         {
//             console.log("It is not prime");
//             flag=false;
//             break;
//         }
//         else{
//             flag=true;
//         }
           
//     }
//     if(flag==true|| num==2)
//     {
//         console.log("It is Prime");
//     }

// }

var input="Robin Singh";
function abbrev_name(nainputme)
{
    let nameArr = input.trim().split(" ");
    if(nameArr.length>1)
    {
        return nameArr[0]+" "+nameArr[1].charAt(0)+".";
    }
    return nameArr[0];
}
console.log(abbrev_name(input));
