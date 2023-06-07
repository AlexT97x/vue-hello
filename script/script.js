
const {createApp} = Vue;                                        

createApp({
        data(){                               
            return{                            
                message: 'Hello World!',
                input_text:'',
                html: '<h1>Benvenuto in Vue.js</h1>',
                image: 'https://fastly.picsum.photos/id/211/200/300.jpg?hmac=wrwgBoS1KPKiLCrxowMtMQ7NpVlzI1NvocRSpH6HSm0',
                }
            }     
}).mount('#app');                             