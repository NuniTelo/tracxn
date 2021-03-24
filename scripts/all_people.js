const axios = require('axios');
const {all_people} = require('../schemas/schemas')

exports.get_all_people = async() =>{
    try{
        let start_from = 154800;
        let size = 200
        while(true){
            var data = JSON.stringify({"dataset":"query","sort":[{"sortField":"peopleScore","order":"DEFAULT"}],"query":{},"filter":{},"view":"peoplev3","size":size,"from":start_from});

            var config = {
            method: 'post',
            url: 'https://tracxn.com/api/2.2/people',
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
                'referer': 'https://tracxn.com/a/s/query/t/people/t/allpeople/table', 
                'accept-language': 'en-US,en;q=0.9,sq;q=0.8', 
                'cookie': '_ga=GA1.2.943196192.1615024346; _gid=GA1.2.1355285608.1615024346; _hjid=ba6813fd-4ad6-4e34-8c48-672243eec28a; _hjFirstSeen=1; _hjAbsoluteSessionInProgress=0; _gu=d224c2be-930e-4d3f-8b03-242d3c538e7a; _gs=2.s(); _gw=2.u%5B%2C%2C%2C%2C%5Dv%5B~g0xcg%2C~1%2C~0%5Da(); intercom-id-bbh06jpc=88d13ac9-ac0c-4956-9881-f752d0cdb4b9; at=869677cc-57b5-4d72-9c43-a000b96b07b3; st=b29c74be-35c1-4ee5-ae62-d9862add6d52; intercom-session-bbh06jpc=Mzd4Zm1PaTlsUFNjMzRYakl6eHd3S2lBZXE3VCtvSVBPcmNOR3RDSEFrelIrYzVPSkFuUDRhUndhMGM1ZHVwSC0tWmQ2T280RmlleHhVZmZielRFaDBGZz09--6f92c1c719b3d79384e134ed4e233da672b1010c; wt=eyJhbGciOiJSUzI1NiJ9.eyJzY29wZSI6InVzZXIiLCJncm91cElkIjoxMjM4MzAsInN1YiI6ImNocmlzQGFzdHJvbm9taWMudmVudHVyZXMiLCJleHAiOjE2MTUwMjU1NDR9.A_5MyvnCPgtqfcjdOfuo7F0UthirFAxI5gA0J3mW4GBBtucru3oZ24iz6poMXoTCnrimtLqj0z7WFKS1h0gSFnOeYjL3aTHUShK2QsNzHeNwlM0j8mDBKBT0W8aal9ExWjNjm47D2V7IVxSqe6XdkSig0NThVL1MQt2JWYsSd0B9eknI8h4xru77st31xYNb6kDntLYHs4eQQVK8WMQcz3ixvIwltwUBflyq29A63jD2yqopzJER2GWTPKKi7BAMU0y5B9UPSQ03_gyaU1ORDfNTMC2uxLNClQMMWeE0HR1VcW08DTpVFLZjsrQR0S_MsjT3VPISWbkBSMUEWl920Q; wtexp=1615025544; _gat=1'
            },
                data : data
            };

            let results = await axios(config);
            
            await all_people.insertMany(results.data.result)
            console.log('ALL PEOPLE PAGE: ' + start_from)
            await sleep(8000)
            start_from = start_from + size
        }
    }catch(err){
        console.log(err)
        return false
    }
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
  