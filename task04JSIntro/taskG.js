function dataType(value)
{
var dataTypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dataTypes .length; x < len; x++) 
     {
            if (value instanceof dataTypes [x])
            {
                return dataTypes [x];
            }
      }
    }
    
    return typeof value;
}
console.log(dataType (20));
console.log(dataType (true));
console.log(dataType('SERRASARACOGLU'));
