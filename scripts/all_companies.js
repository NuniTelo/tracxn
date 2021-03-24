const axios = require('axios');
const {all_companies} = require('../schemas/schemas')

exports.get_all_companies = async() =>{
    try{
        let start_from = 109000;
        let size = 200
        while(true){
            let data = JSON.stringify({"dataset":"query","sort":[{"sortField":"relevance","order":"DEFAULT"}],"query":{},"filter":{},"view":"card","size":size,"from":start_from});
            let config = {
            method: 'post',
            url: 'https://tracxn.com/api/2.2/companies',
            headers: { 
                'authority': 'tracxn.com', 
                'sec-ch-ua': '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"', 
                'sec-ch-ua-mobile': '?0', 
                'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36', 
                'x-frontend-app-version': 'portalApp-1614947357018-5.3.6', 
                'content-type': 'application/json', 
                'accept': '*/*', 
                'origin': 'https://tracxn.com', 
                'sec-fetch-site': 'same-origin', 
                'sec-fetch-mode': 'cors', 
                'sec-fetch-dest': 'empty', 
                'referer': 'https://tracxn.com/a/s/query/t/companiescovered/t/all/card', 
                'accept-language': 'en-US,en;q=0.9,sq;q=0.8', 
                'cookie': '_ga=GA1.2.943196192.1615024346; _gid=GA1.2.1355285608.1615024346; _hjid=ba6813fd-4ad6-4e34-8c48-672243eec28a; _hjFirstSeen=1; _hjAbsoluteSessionInProgress=0; _gu=d224c2be-930e-4d3f-8b03-242d3c538e7a; _gs=2.s(); _gw=2.u%5B%2C%2C%2C%2C%5Dv%5B~g0xcg%2C~1%2C~0%5Da(); intercom-id-bbh06jpc=88d13ac9-ac0c-4956-9881-f752d0cdb4b9; at=869677cc-57b5-4d72-9c43-a000b96b07b3; st=b29c74be-35c1-4ee5-ae62-d9862add6d52; intercom-session-bbh06jpc=bXNtdFVZVUVQaFBCcUVOMGpTY2N5Wk84NEJvdW5yZkNlTjhLY2lmWGh5WFRITUNVQURuZHc4ditib2hRZzZsSS0tYkFTRmNzRkJ0VFRIWXhtQ0dsK3R0UT09--252a455d97d588103b36a8c073c6f7bd8b414b58; wt=eyJhbGciOiJSUzI1NiJ9.eyJzY29wZSI6InVzZXIiLCJncm91cElkIjoxMjM4MzAsInN1YiI6ImNocmlzQGFzdHJvbm9taWMudmVudHVyZXMiLCJleHAiOjE2MTUwMjU2ODF9.EcUjCdBg-qLALnoEMaffTrl5q9QuvC4V4AQrNLj6v5WSmU8ZlxGForN4e9QInUbjeFTi-jhkclOwLj6d7ICUxOSjWp9oMW-Vob-Ps8FmhW5MglU6iuhvLDOztKucf4iZ5ijEAuSdblMjqhUkUcmPTIRZ2d2hUu19GPKT4TVqlknhlsQlC-IdHVaTBB7PSi_biAIyiCPPiF6V9YAS5P8Pwg7y-r12cpLpp0rXuXIKLUszeVnSWfneRaxIxKG5uXCSROVapPdFw3dKYxPf6MJ2MwP5p40p72k9oOdcdn0C81wl8ZApxPamyJD_rrOkdnt9DsXrhgoB5yDmznjkLnOiGA; wtexp=1615025681; _gat=1'
            },
                data : data
            };
    
            let results = await axios(config);
            await all_companies.insertMany(results.data.result)
            console.log('ALL COMPANIES PAGE: ' + start_from)
            start_from = start_from + size
            await sleep(6000)
        }
    }catch(err){
        console.log(err)
        return false
    }
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
  