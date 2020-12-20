const fs = require('fs');

const axios = require('axios');
const cheerio = require('cheerio');


module.exports.Landing = async(req, res, next)=>{
    try {

        res.json({msg: "welcome to this app"})
        
    } catch (error) {
        res.json(500);
        
    }
}


module.exports.getData = async(req, res, next)=>{
    try {

        

        fs.readFile('list.txt', function read(err, data){

            if(err) throw err;
        
            var dataset = data.toString('utf-8');
        
            var urldata = dataset.split("\r\n").map((item)=>{return {url : "www." + item + ".com"}})
        
            var array = [];

            for(var a =0; a < urldata.length; a ++){

            var url = urldata[a].url;
            url = "https://" + url;
            
            const Fetchurl = url;

        

            async function fetchData(url){
                let response = await axios(url).catch((err) => console.log(err));
            
                if(response.status !== 200){
                    console.log("Error occurred while fetching data");
                    return;
                }
                return response;
            }
            
            
            fetchData(Fetchurl).then( (response) => {
                const html = response.data;
                const $ = cheerio.load(html);
                const title = $('title').text()
            
                const meta = $('head').data();
               
               
            
                array.push({title, meta});
                
                
            })
    



            res.json(array)

       



            }

        
            
            
        })

       
       

        
        

        

        
    } catch (error) {

        res.json(500);
    }
}

module.exports.domainList = async(req, res)=>{
    try {

        fs.readFile('list.txt', function read(err, data){

            if(err) throw err;
        
            var dataset = data.toString('utf-8');
        
            var urldata = dataset.split("\r\n").map((item)=>{return {url : "www." + item + ".com"}})
        
            res.json(urldata);
        
            
        })
        
    
        
        
    } catch (error) {
        res.status(500).json({msg: "Internal Server error"})
        
    }
}