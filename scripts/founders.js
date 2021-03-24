const axios = require('axios');
const {founders} = require('../schemas/schemas')

exports.get_all_founders = async() =>{
    try{
        let start_from = 0;
        let size = 100
        while(true){
            var data = JSON.stringify({"dataset":"query","sort":[{"sortField":"peopleScore","order":"DEFAULT"}],"query":{},"filter":{"and":[{"founderInfoDomain":["t_all"]}]},"view":"peoplev3","size":size,"from":start_from});
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
                'referer': 'https://tracxn.com/a/s/query/t/people/t/founders', 
                'accept-language': 'en-US,en;q=0.9,sq;q=0.8', 
                'cookie': '_ga=GA1.2.943196192.1615024346; _gid=GA1.2.1355285608.1615024346; _hjid=ba6813fd-4ad6-4e34-8c48-672243eec28a; _hjFirstSeen=1; _hjAbsoluteSessionInProgress=0; _gu=d224c2be-930e-4d3f-8b03-242d3c538e7a; _gs=2.s(); _gw=2.u%5B%2C%2C%2C%2C%5Dv%5B~g0xcg%2C~1%2C~0%5Da(); intercom-id-bbh06jpc=88d13ac9-ac0c-4956-9881-f752d0cdb4b9; at=869677cc-57b5-4d72-9c43-a000b96b07b3; st=b29c74be-35c1-4ee5-ae62-d9862add6d52; wt=eyJhbGciOiJSUzI1NiJ9.eyJzY29wZSI6InVzZXIiLCJncm91cElkIjoxMjM4MzAsInN1YiI6ImNocmlzQGFzdHJvbm9taWMudmVudHVyZXMiLCJleHAiOjE2MTUwMjUzMTh9.oldNU3sX4-wVd3ch53H3eISTHF3IiJ70zFq5qxCBXDDv4ebATgJ74FVnmOkdsazYbOubg4jRNZsunK09RczsBod8v5r3WtSuoLw1PndYqAFbLHrPvDADipHLUc7qdZPrlaHDrof2CwlRjMEqXvHDMSB73dyix_Azz8nYFEOuruDHuz8wBQO0QiqgNWSqeUl5sEQSeg8crjbklprh7e1XwTWxEesheKoaFGCYhZ1lEpk4Ps46xEfGdD7WsIUbS4FHZCcAhTzIqwB7VPum-mD6dW00qUkSvQx_Jl3BfFZ8dvROhVd2zVdQ1DjlGyhvkBtMYpOMfPDPAvefKWvarcxUKw; wtexp=1615025318; _gat=1; intercom-session-bbh06jpc=anRUMWNqTERRa0crbFg5NVRLM24rejYzVVlhZmhPYkhmbldEdGZrMU1BWVhWSHorT0wvM2UrU2RMemt3QkdlOS0tcXlocDFPRjQxOUNNV1ZkMnVaK0pYQT09--4cc42de329b95f512acc94a19b9fa22b6c8e208b'
            },
                data : data
            };

            let results = await axios(config);
            
            await founders.insertMany(results.data.result)
            console.log('ALL founders PAGE: ' + start_from)
            start_from = start_from + size
        }
    }catch(err){
        console.log(err)
        return false
    }
}