{

    type AreaOfCircle = {
        shape:string;
        radius:number;
    }

    type AreaOfRectangle= {
        shape:string;
        height:number;
        width:number;
    }

    type CalculateShapeArea =(value:AreaOfCircle | AreaOfRectangle) => number

    type Area = number

    
    
    const calculateShapeArea:CalculateShapeArea =(value)=> {
    
        let area:Area
    
        if(('radius' in value) && value.radius > 0) {
        area = Math.PI * value.radius**2
        } 
        else if ((('height' in value) && (value.height > 0)) && 
                 ('width' in value && value.width > 0)) { if(
                    value.height>value.width) {
                        area = (value.height * value.width)
                    } else {
                        throw new Error ("Width cannot be greater than Height")
                    }
          
        } 
        else {
            throw new Error ("Wrong Input")
        }
        return area
    }

}