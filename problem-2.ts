{
    type RemoveDuplicates = (numbers:number[]) => number[]

    const removeDuplicates:RemoveDuplicates = (numbers) => {
        const newArr = numbers.filter((item:number,index:number) => numbers.indexOf(item) === index)
        return newArr
    }

}