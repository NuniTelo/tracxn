const axios = require('axios');
const {minicorn} = require('../schemas/schemas')

exports.get_all_minicorn = async() =>{
    try{
        let start_from = 0;
        let size = 100
        while(true){
            var data = JSON.stringify({"dataset":"query","sort":[{"sortField":"soonicornEventDate","order":"DEFAULT"}],"query":{},"filter":{"and":[{"soonicornFlag":["MINICORN"]}]},"view":"card","size":size,"from":start_from});

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
                'referer': 'https://tracxn.com/a/s/query/t/soonicorn/t/minicorn/card', 
                'accept-language': 'en-US,en;q=0.9,sq;q=0.8', 
                'cookie': '_ga=GA1.2.943196192.1615024346; _gid=GA1.2.1355285608.1615024346; _hjid=ba6813fd-4ad6-4e34-8c48-672243eec28a; _hjFirstSeen=1; _hjAbsoluteSessionInProgress=0; _gu=d224c2be-930e-4d3f-8b03-242d3c538e7a; _gs=2.s(); _gw=2.u%5B%2C%2C%2C%2C%5Dv%5B~g0xcg%2C~1%2C~0%5Da(); intercom-id-bbh06jpc=88d13ac9-ac0c-4956-9881-f752d0cdb4b9; at=869677cc-57b5-4d72-9c43-a000b96b07b3; st=b29c74be-35c1-4ee5-ae62-d9862add6d52; wt=eyJhbGciOiJSUzI1NiJ9.eyJzY29wZSI6InVzZXIiLCJncm91cElkIjoxMjM4MzAsInN1YiI6ImNocmlzQGFzdHJvbm9taWMudmVudHVyZXMiLCJleHAiOjE2MTUwMjYyODh9.QOvoqj9D1_NDpECqFVTcMIn72WhDvG6Di7srGHY3fdW22eltXpNdkhUsC8ZlL5kHyrK7yNofOr2IWqw696eWFKyrOxtvFh7XyFG3_B6xjOm4LSAr7JjX8Jk9sfsv1n8Oarw_0ZgfvZ0WNabQmU5Xg9ISFfXOIz14y6sF_x9e6XH7LMWIuuljss_xEBrA2vjcgK9JS1xb0PoRxpsyTUavNUX-PznxgkePd4zZMzi_IDb3c61UtnYVcfj9Mv2H_UVk20yfOiRqXhHtdn2rnQA1p8zls58O6-dsyyUEYmoi7JGBFVuaIU2InBq_V7iu2OHLiQ5wTxM4ZQV4aCBaVLQIpg; wtexp=1615026288; _gat=1; intercom-session-bbh06jpc=OVdLNFNTaGx3Yi9QZUZ2ZzdEUVJ1VjJNcm43M3lOeUEySWJOMEh4Q3BSdzJRTS92V3B0cCtWbFE0RkNKbTJtdC0tM2xuRHVrRERuUkhYZzRqZlJxNlVtUT09--041aef344ac4d54f8782bf3457b4e1d80ec2fa53'
            },
                data : data
            };

            let results = await axios(config);
            
            await minicorn.insertMany(results.data.result)
            console.log('ALL minicorn PAGE: ' + start_from)
            start_from = start_from + size
        }
    }catch(err){
        console.log(err)
        return false
    }
}