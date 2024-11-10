## Topic-1: The significance of union and intersection types in Typescript.

Union ( | ) Type
****************
The Union type can accept multiple types of value. To use this type, have to use (|) among each type. The use of union types and its importances are discussed here.

- If we want to declare a string value and number value on a variable, typescript shows error. such as :


<pre>let studentId = 190607006
studentId = "190607006"` // shows error
   </pre>

- But using the union type we can solve this problem. Union types can get multiple types at a time. such as:
<pre>
type StudentId = 190607006 | "190607006"

let studentId:StudentId   // here studentId variable has 2 types (string, number) of values. 
</pre>



- Union type has the options to have fixed serveral types of value. such as:
<pre>
type BackendDev = 'django' | 'node'
type Money = 50 | 70

</pre>
- We have seen that union types can take different types of value, now here it takes multiple types to make a combined types.
<pre>
type Name = string
type Age = number 
type Both = Name | Age   // this Both has both string and number types.

</pre>



Intersection (&) types
**********************
This type can combine multiple types to form an another type. The (&) is used between two types to get a new one. such as:


- Besides it can work with objects to get all properties from two different objects. such as:
<pre>
type FrontD = {
    skills: string[];
    role:string
}

type BackD = {
    skills: string[];
    age:number
}


type FullD = FrontD & BackD

const developer:FullD = {
    skills:['nodejs','html'],
    role:"fullstack",
    age:24
}   // so, ultimately the fullD becomes a new one type where it takes all the types from FrontD and BackD types.
    <pre>
