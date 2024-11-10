{
    interface Profile{
        name:string;
        age:number;
        email:string
    }

   const updateProfile = (oldProfile:Profile, updates: Partial<Profile>) => {
    return {...oldProfile,...updates}
   }

}

