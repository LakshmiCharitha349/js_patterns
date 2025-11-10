const data = [23,24,23,24,25]

const findCount = (result,number) => {
  if(result.length === 0) {
     return  result.push([number,1])&& result;
  }

  const occurence = result.find((x) =>x[0] === number) ;
  if(occurence === undefined ) {
    return  result.push([number,1])&& result;
  }
  return occurence[1]++ && result;
     
  }

const frequency = data.reduce(findCount,[]);
console.log(frequency);

