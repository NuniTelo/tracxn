const axios = require('axios');
const {unicorn} = require('../schemas/schemas')

exports.get_all_unicorn = async() =>{
    try{
        let start_from = 0;
        let size = 100
        while(true){
            var data = JSON.stringify({"dataset":"query","sort":[{"sortField":"soonicornEventDate","order":"DEFAULT"}],"query":{},"filter":{"and":[{"soonicornFlag":["UNICORN"]}]},"view":"card","size":size,"from":start_from});
            var config = {
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
                'referer': 'https://tracxn.com/a/s/query/t/soonicorn/t/unicorn/card', 
                'accept-language': 'en-US,en;q=0.9,sq;q=0.8', 
                'cookie': '_ga=GA1.2.943196192.1615024346; _gid=GA1.2.1355285608.1615024346; _hjid=ba6813fd-4ad6-4e34-8c48-672243eec28a; _hjFirstSeen=1; _hjAbsoluteSessionInProgress=0; _gu=d224c2be-930e-4d3f-8b03-242d3c538e7a; _gs=2.s(); _gw=2.u%5B%2C%2C%2C%2C%5Dv%5B~g0xcg%2C~1%2C~0%5Da(); intercom-id-bbh06jpc=88d13ac9-ac0c-4956-9881-f752d0cdb4b9; at=869677cc-57b5-4d72-9c43-a000b96b07b3; st=b29c74be-35c1-4ee5-ae62-d9862add6d52; _gat=1; intercom-session-bbh06jpc=aks2NFlhUFBIR0dBK1B0SzZnNmZjVVlJMko4WlE5K080M3J3VHUwQ1pxMXoydDZwTUp3YzhFQStvd2tLUnZIKy0tQzJoWWdvSXZSdnIyWUpqM0grSk42UT09--2bfa13143945f8c4f78d739ab0e2de0a1beb1835; wt=eyJhbGciOiJSUzI1NiJ9.eyJzY29wZSI6InVzZXIiLCJncm91cElkIjoxMjM4MzAsInN1YiI6ImNocmlzQGFzdHJvbm9taWMudmVudHVyZXMiLCJleHAiOjE2MTUwMjYxMjZ9.Gju-hnpphGXJROzgCfqmTxeszwtn3Dut3tZZfXKklG55dzWp196jxoihjooQsEQgFVLeiHRBpQP-7K2AMTpngbKinz9QS3ubCul-9zLPSjbM8hewnosOUOoM8OS6UxRDcqatTHwER_2dF_z02Dac-Oa6kpBZio6bCnjwQmsSCqGqfn_dE8GK1K7S0fH9U1ZerGnansIee_zcj65rEUFfr-pAev9ejWZs4ciwjTh4ZCD0mTc0ZW1wWzX5-QlMV7I9u6rtUTV2ugtasDCrmqIYYbOdjnr4T3Zi5KBaThSbVSMM36tgOulu2LCKnW8jkWqPK2pJb7lGfvGAQcEkPSW5Mg; wtexp=1615026126'
            },
                data : data
            };

            let results = await axios(config);
            
            await unicorn.insertMany(results.data.result)
            console.log('ALL unicorn PAGE: ' + start_from)
            start_from = start_from + size
        }
    }catch(err){
        console.log(err)
        return false
    }
}