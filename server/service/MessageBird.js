import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://rest.messagebird.com'
})

class Messagebird {
    constructor(accessKey){
        axiosInstance.defaults.headers.common['Authorization'] = 'AccessKey ' + accessKey
    }

    balance(){
        return {
            read: () => {
                axiosInstance.get('/balance')
                    .then((response) => {
                        console.log(JSON.stringify(response, null, 2))
                    })
            }
        }
    }
}

export default Messagebird