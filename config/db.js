const mongoose = require('mongoose')
const URIDB='mongodb://localhost:27017/UnabCicloWeb'

module.exports = ()=>{
    const conn =() =>{
        mongoose.connect(
            URIDB,
            {
                keepAlive : true,
                useNewUrlParser : true,
                useUnifiedTopology : true
            },
            (err) =>{
                if(err){
                    console.log("Error Conn:" + err)    
                }
                else{
                    console.log("Conexion satisfacoria")
                }
            }
        )
    }
    conn()
}