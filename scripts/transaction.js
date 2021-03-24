const axios = require('axios');
const {transaction} = require('../schemas/schemas')

exports.get_all_transaction = async() =>{
    try{
        let start_from = 0;
        let size = 100
        while(true){
            var data = JSON.stringify({"view":"transaction","dataset":"query","sort":[{"sortField":"transactionFundingRoundDate","order":"DEFAULT"}],"query":{},"filter":{},"size":size,"from":start_from});

            var config = {
            method: 'post',
            url: 'https://tracxn.com/api/2.2/transactions',
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
                'referer': 'https://tracxn.com/a/s/query/t/investments/t/transactions/card', 
                'accept-language': 'en-US,en;q=0.9,sq;q=0.8', 
                'cookie': '_ga=GA1.2.943196192.1615024346; _gid=GA1.2.1355285608.1615024346; _hjid=ba6813fd-4ad6-4e34-8c48-672243eec28a; _gu=d224c2be-930e-4d3f-8b03-242d3c538e7a; _gs=2.s(); _gw=2.u%5B%2C%2C%2C%2C%5Dv%5B~g0xcg%2C~1%2C~0%5Da(); intercom-id-bbh06jpc=88d13ac9-ac0c-4956-9881-f752d0cdb4b9; at=869677cc-57b5-4d72-9c43-a000b96b07b3; st=b29c74be-35c1-4ee5-ae62-d9862add6d52; intercom-session-bbh06jpc=QTVBZXFDTmFKMHQ1NmtrSjhSSlVjSktQSmRnaS9QQVVaT0s4bnBGTEQyVzZMZVpTS3ovZVZsZXlwMmJDVzZZNi0tb1VqK2VrU0FRWk85VURhTXNrL1FzUT09--81b4df70a34c46fff87a5d6648250a3ded82ab00; wt=eyJhbGciOiJSUzI1NiJ9.eyJzY29wZSI6InVzZXIiLCJncm91cElkIjoxMjM4MzAsInN1YiI6ImNocmlzQGFzdHJvbm9taWMudmVudHVyZXMiLCJleHAiOjE2MTUwMjY1MTF9.HW4Q4o5ySZMBjydEAaD-oSpFj6wKbWNHujdZljvK-xYKVRFLhHwLnR9UfX_SlWGrQ2daHxlgP1So8Rjil03K1rLDpYRiLJoI1wkNDAhnWy5BlJAgdxmhhSR-MHTiqpB_v94l-jElbAC5repeHRwW6bP3jOA7NLNuuyNp6yUOqJub4o7TDj0xJFIMvTrJXSlOyzXft6bZohCPZSM6xtS4twXcgdsxLWdyFTP4FYFXMoU9fgQ8Pzt32LzHUcQy5AAyc-g69qAsn0IgoTKQPFqGsqK3f02LUr2VggB2h8b82EwLB2JolfOFxfzUSa1kafpWx73d0nikK9I1twPXxJRjPA; wtexp=1615026511; _gat=1'
            },
                data : data
            };

            let results = await axios(config);
            
            await transaction.insertMany(results.data.result)
            console.log('ALL transaction PAGE: ' + start_from)
            start_from = start_from + size
        }
    }catch(err){
        console.log(err)
        return false
    }
}