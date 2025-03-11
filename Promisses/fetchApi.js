const UserInfo = async()=>{
    try{
    const response = await fetch("https://reqres.in/api-90/users?page=2")
    if(!response.ok)
    {
        throw new Error("User data is not found")
    }
    else{
        const userData = await response.json()
        console.log(userData)
    }
}
catch(error){
console.log(error)
}

}

//calling the function
UserInfo()
