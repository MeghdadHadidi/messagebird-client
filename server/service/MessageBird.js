import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://rest.messagebird.com'
})

function Messagebird(accessKey) {
    axiosInstance.defaults.headers.common['Authorization'] = 'AccessKey ' + accessKey

    /**
     * MessageBird services object
     * @returns {Object}
     */
    return {
        balance: {
            /**
             * Get balance service method
             * @returns {Promise<any>}
             */
            get(){
                return axiosInstance.get('/balance')
            }
        },

        messages: {
            /**
             * Get messages service method
             * @returns {Promise<any>}
             * @param {id} #Optional
             */
            get(id){
                if(!id){
                    return axiosInstance.get('/messages')
                }

                else {
                    return axiosInstance.get(`/messages/${id}`)
                }
            },

            /**
             * Sends message 
             * @returns {Promise<any>}
             * @param {Object}
             */
            send(message){
                return axiosInstance.post('/messages', message)
            }
        }
    }
}

export default Messagebird