const {Router}=require('express')
const sendEmail = require('./services/sendEmail')

const routes=new Router()

routes.post('/',async (req,res)=>{
    try {

        const {name,email,message}=req.body

        if(!name || !email || !message){
            return res.status(500).json({error:'Invalid contact'})
        }

        await sendEmail({name,email,message})

        return res.status(200).json({success:'Send email'})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:'Internal error.'})
    }
})

module.exports=routes