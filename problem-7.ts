{
    class Car {
        make:string;
        model:string;
        year:number

        constructor (make:string,model:string,year:number) {
            this.make = make
            this.model = model 
            this.year = year
        }

        getCarAge () {
           
           if(this.year < 2024) {
            const age:number = 2024 - this.year
            return age;
           } else {
            throw new Error("Wrong Year Input")
           }
           
        }
    }


}