const bcrypt=require("bcrypt")

const hashPassword=async(password)=>{
    const salt=await bcrypt.genSalt(12)
    const hash=await bcrypt.hash(password,salt)
    console.log("Salt: "+salt)
    console.log("Password: "+password)
    console.log("Hash: "+hash)
}//it will give different output each time btw
//hashPassword("IAMDONE123")

const hashPW=async(pw)=>{
    const hash=await bcrypt.hash(pw,12)
    console.log("Hash"+hash)
}

const login=async(pw,hashPW)=>{
    const result=await bcrypt.compare(pw,hashPW)
    if(result){
        console.log("varified")
    }else{
        console.log("not varified")
    }
}
login("IAMDONE123","$2b$12$/YcRHIaHgy6qSd4LczzyCe.1ObcU7DT3RvsAYeb78V/bdTtNTa7DC")//varified
login("IAMDONE123","$2b$12$VdYh7RQ0.tmq4eORl//UkuU5xd5Hgeb1UJ1t5uteRSH4M.ML003Jm")//varified
login("IAMDONE123","$2b$12$wm7W3Snu1qvydvtxiVjpq.uvHfa2NuiGtlBhuCcbz1SRbjNjEMDsO")//varified