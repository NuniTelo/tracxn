const axios = require('axios');
const {board_members} = require('../schemas/schemas')

exports.get_all_board_members = async() =>{
    try{
        let start_from = 0;
        let size = 100
        while(true){
            var data = JSON.stringify({"dataset":"query","sort":[{"sortField":"peopleScore","order":"DEFAULT"}],"query":{},"filter":{"and":[{"boardMemberInfoStatus":["CURRENT","PAST"]}]},"view":"peoplev3","size":size,"from":start_from});

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
                'referer': 'https://tracxn.com/a/s/query/t/people/t/boardmembers', 
                'accept-language': 'en-US,en;q=0.9,sq;q=0.8', 
                'cookie': '_ga=GA1.2.943196192.1615024346; _gid=GA1.2.1355285608.1615024346; _hjid=ba6813fd-4ad6-4e34-8c48-672243eec28a; _hjFirstSeen=1; _hjAbsoluteSessionInProgress=0; _gu=d224c2be-930e-4d3f-8b03-242d3c538e7a; _gs=2.s(); _gw=2.u%5B%2C%2C%2C%2C%5Dv%5B~g0xcg%2C~1%2C~0%5Da(); intercom-id-bbh06jpc=88d13ac9-ac0c-4956-9881-f752d0cdb4b9; at=869677cc-57b5-4d72-9c43-a000b96b07b3; st=b29c74be-35c1-4ee5-ae62-d9862add6d52; wt=eyJhbGciOiJSUzI1NiJ9.eyJzY29wZSI6InVzZXIiLCJncm91cElkIjoxMjM4MzAsInN1YiI6ImNocmlzQGFzdHJvbm9taWMudmVudHVyZXMiLCJleHAiOjE2MTUwMjQ3OTB9.I4rR8FGe5wHuC4zmrWOdBsSLp5Fv2_pDPs-qY40BSM-VDj5d60SAn5SidzIbgsbf3Yvq7kYDqyeTN_MVM0XXlwmCG_kjTEen2WWou1W2x4B2kYGjT7G_zyZgW0tnGNpdFA_577jCxAPnLl7tohjT2nw4n2KB5Up57bkZR0OMxJstKLzzgIMT8JlXXRAck0E3Dk70K5i05wFaEfds8LaekQkXuMQGwqOPkJsR5Hj9nRMv0OSrwTtG5noChv9ZRsgwNC8Fbk6BgLKiTA6enmf1sP7Z7A_1m6Q9PqvJtpqC17QO7sG1ZeFwTuSvx7D8RcoNr9VdvkKJ1dHhcujpDTHXMg; wtexp=1615024790; intercom-session-bbh06jpc=RGk4UnZNYmRDc1JtdURwRzZtNFFWK3dPN3lBcDcxMmk4YmZydjlTWFFkYW1telZvSWtIRUNjVzZraDFWTU1JYS0tdDJkU0NFenhUQjRCVW80Ni93TlpmUT09--9ab167013643e5a933e3d32dba3813b9c6d23db8; _gat=1'
            },
                data : data
            };


            let results = await axios(config);
            
            await board_members.insertMany(results.data.result)
            console.log('ALL board_members PAGE: ' + start_from)
            start_from = start_from + size
        }
    }catch(err){
        console.log(err)
        return false
    }
}