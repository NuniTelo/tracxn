const axios = require('axios');
const {aquisition} = require('../schemas/schemas')

exports.get_all_aquisition = async() =>{
    try{
        let start_from = 0;
        let size = 50
        while(true){
            var data = JSON.stringify({"dataset":"query","sort":[{"sortField":"announcementDate","order":"DEFAULT"}],"query":{},"filter":{},"size":size,"from":start_from});

            var config = {
              method: 'post',
              url: 'https://tracxn.com/api/2.2/acquisitiontransactions',
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
                'referer': 'https://tracxn.com/a/s/query/t/acquisitions/t/allacquisitions/card', 
                'accept-language': 'en-US,en;q=0.9,sq;q=0.8', 
                'cookie': '_ga=GA1.2.943196192.1615024346; _gid=GA1.2.1355285608.1615024346; _hjid=ba6813fd-4ad6-4e34-8c48-672243eec28a; _gu=d224c2be-930e-4d3f-8b03-242d3c538e7a; _gs=2.s(); _gw=2.u%5B%2C%2C%2C%2C%5Dv%5B~g0xcg%2C~1%2C~0%5Da(); intercom-id-bbh06jpc=88d13ac9-ac0c-4956-9881-f752d0cdb4b9; at=869677cc-57b5-4d72-9c43-a000b96b07b3; st=b29c74be-35c1-4ee5-ae62-d9862add6d52; intercom-session-bbh06jpc=S0pSaFZIRGtkamRXTWF1R0FudE10MFc4R3ZUc2FLZW95cVNGZE02eHNPNGg5UzNvS056aEMrTTk0QWZLeFJtVy0tZWdKeEloT09HQzF6UDNDVGdQTkwvUT09--d41e5b412817d64abfb95eb883d3abddcac981b8; wt=eyJhbGciOiJSUzI1NiJ9.eyJzY29wZSI6InVzZXIiLCJncm91cElkIjoxMjM4MzAsInN1YiI6ImNocmlzQGFzdHJvbm9taWMudmVudHVyZXMiLCJleHAiOjE2MTUwMjY2MTh9.nK-AxBB12EkrmgviA7XJV5QbqohoJxJB_V-Fj0OGYMwAj3XDPwqz364c-HXHGvH_ue70TS5pjc5UFUry1uW6WiBT14-gh29s78UI1meXtbu_yOz_ie5vVB6nDDUf-YiTIPn6rEbHjyClnxV_mliNMZ1ZwqrCfMZ5ayHQMdfKCnjpItIt1i1z41By7ch90LWRl1QQYQ8ViWANg1fmOFJ0TkHczWau-Ysap-hEJozRKYcyTXnywYuKOwsjskiH5FhqVb3C73Knw_7bwG7Cj2nqcEfzkMKP9ALX_hJZ0xVrTDlpGhGNfQJvSiQ7Z2yqiQGpSiMojAuaWkIpZnEOzkUY9Q; wtexp=1615026618; _gat=1'
              },
              data : data
            };

            let results = await axios(config);
            
            await aquisition.insertMany(results.data.result)
            console.log('ALL aquisition PAGE: ' + start_from)
            start_from = start_from + size
        }
    }catch(err){
        console.log(err)
        return false
    }
}