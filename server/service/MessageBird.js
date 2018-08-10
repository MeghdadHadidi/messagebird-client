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
        },

        contacts: {
            /**
             * Get contacts service method
             * @returns {Promise<any>}
             * @param {id} #Optional
             */

            get(id){
                if(!id){
                    return axiosInstance.get('/contacts')
                }

                else {
                    return axiosInstance.get(`/contacts/${id}`)
                }
            },

            /**
             * Adds a new contact 
             * @returns {Promise<any>}
             * @param {Object}
             */
            add(message){
                return axiosInstance.post('/contacts', message)
            },

            /**
             * Removes contact 
             * @returns {Promise<any>}
             * @param {Object}
             */
            delete(id){
                return axiosInstance.delete(`/contacts/${id}`, id)
            }
        }
    }
}

export default Messagebird