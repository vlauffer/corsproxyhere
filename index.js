const express = require('express');
const app = express();
const axios = require('axios').default
// import fetch from node-fetch
const cors = require('cors');
const { header } = require('express/lib/response');

app.use(cors())
var bearer = "eyJhbGciOiJSUzUxMiIsImN0eSI6IkpXVCIsImlzcyI6IkhFUkUiLCJhaWQiOiJqNk9WczlmTGlXbmljc21PUFJkQyIsImlhdCI6MTY1NDcwMTQ3NSwiZXhwIjoxNjU0Nzg3ODc1LCJraWQiOiJqMSJ9.ZXlKaGJHY2lPaUprYVhJaUxDSmxibU1pT2lKQk1qVTJRMEpETFVoVE5URXlJbjAuLjhLZU9JZEJtS2xLT1dlYWpIb0VrU3cucXh6QlprTEpZSm84dkNPQkdOb25TMUhWNGg2eWhESFJYNktoUENGM3dkSElzUzdNQTdpQ2RfMmtOdThQT1liR0lxamVnZ3Y2aGViTjE2WTlhUXFiZUp1TmFMYVRVRXM3UTVzbjVxQzRNeXFkUUNvbkJOVVFtY3NRWFVMUDNLc2NfQWd0dVIwNTlSRFdES0JfM2w0RjFRLmQ5ejFXeHlJMHRSUzZJT1pWUjM5dEFsWUU5dzNvUVBza0NSbGlMSi1fWmM.b4JivR7wyMr3M9g1NSfmnauF33UnSyaTgMzd8NfX2c0jC_q-mTUDYIhfcXM-rMet7cOKs7ZgTNKNn5l1y8mguR9eoNG-ZXKezhopmU5IQQVf8x01qsWh9GyUa2Wkeq2KtYfbternGOsLgdunLopSduiWJtrEQj-jrStZ7aEHCOq9FFlE1b4p28jrzXVxkKFGp4wHJkSRRYdEVg1UdmcLDjjujjsWh_m4POVFNFaoXnnEoA3zlBg9Nfg7N1bsmiE6hH9-cgs5M2ZAobS7FrVDYKeWRKevhPvR6pXlgmP38B4I5_iQ_KDcNWxvNu26QakxAdMq6mA7dgqr9HaqI-LugA"

app.get("/", async (req, res)=>{
    var query = 'https://data.traffic.hereapi.com/v7/flow?locationReferencing=shape&in=bbox:13.400,52.500,13.405,52.505'
    
    const options = {
        headers:{
            "Authorization": "Bearer "+bearer
        }
        
    }
    const response = await axios.get(query,
        options
    );
    res.send(response.data)
    console.log(response)
    // const data = awai t response.json()
    
})

app.listen(3000, ()=>{
    console.log("listening")
})