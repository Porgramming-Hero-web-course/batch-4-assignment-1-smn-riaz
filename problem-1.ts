{
  type SumArray = (numbers: number[]) => number;

  const sumArray: SumArray = (numbers) => {
    let sum = 0;
    
    numbers.forEach((number: number) => (sum = sum + number));

    return sum;
  };

}
