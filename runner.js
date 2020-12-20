const fs = require('fs');


fs.readFile('list.txt', function read(err, data){

    if(err) throw err;

    var dataset = data.toString('utf-8');

    var urldata = dataset.split("\r\n").map((item)=>{return "www." + item + ".com"})

    console.log(urldata);

 // fs.writeFile('domains.json', urldata, (err) => {
        // When a request is aborted - the callback is called with an AbortError
     // });

    
})
