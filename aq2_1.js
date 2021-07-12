var a = 42
var b = 16
var gcd;

while(a != b)
{
    if (a > b)
    {
         a = a - b;
    } else{
         b = b - a;
    }
}
gcd = a;
console.log(gcd);