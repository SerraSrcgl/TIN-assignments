function Second_Greatest_Lowest(arr)

{
 
  arr.sort(function(x,y)
         
           {
        
           return x-y;
        
           });
 
  var value = [arr[0]];
  

  var result = [];
  
  for(var j=1; j < arr.length; j++)
  
  {
  
    if(arr[j-1] !== arr[j])
  
    {
  
      value.push(arr[j]);
  
    }
  
  }
  
    result.push(value[1],value[value.length-2]);
  
  return result.join(',');
  
  }


console.log(Second_Greatest_Lowest([9,10,12,13,45,69]));
