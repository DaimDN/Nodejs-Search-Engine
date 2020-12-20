
const axios = require('axios');
const cheerio = require('cheerio');

const Fetchurl = "https://www.yahoo.com";

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
   
   

    console.log({title, meta});
    
    
})

