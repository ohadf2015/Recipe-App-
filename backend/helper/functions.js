const _=require('lodash')
const fs=require('fs')
const path=require('path')
const JSONStream = require('JSONStream')


async function getRecommendations(){
    
let data=await readRecommendationsJson()
return data
}

function readRecommendationsJson(){

    return new Promise((resolve, reject) => {
        let dataFinal=[]
        folderPath=path.join(__dirname,'../../json')
        let thisFilePath=fs.readdirSync(folderPath).filter(file=>{
        return path.extname(file).toLowerCase()=='.json'
        })

        const RS=fs.createReadStream(path.join(folderPath,thisFilePath[0]))
        const parseStream=JSONStream.parse().on('data',function(data){
           if(!_.find(dataFinal,function(o){return o.userId==data.userId})){
               dataFinal.push(data)
           }
        })
         RS.pipe(parseStream).on('end',()=>{
            resolve(dataFinal)
         })
         RS.pipe(parseStream).on('error',error=>reject(error))
        })
}


module.exports={
    getRecommendations:getRecommendations
}