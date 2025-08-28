class APIUtils {

    constructor (apiContext, dataPayload){
        this.apiContext = apiContext;
        this.dataPayload = dataPayload
    }

async getToken(){

     const response = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.dataPayload
            })
    
       
         const resJson = await response.json();
        const token = resJson.token;  
    
         console.log(token);

         return token;

}

async createOrder(orderPayload){

    let dataObj = {};
    dataObj.token = await this.getToken();
     const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        
        {
            data: orderPayload,

            headers:{
                'authorization': dataObj.token,
                'Content-type':"application/json"
                    }
        })

        const orderResJson = await orderResponse.json();
        console.log(orderResJson);
        const orderId = orderResJson.orders[0];
        dataObj.orderId = orderId;
        return dataObj;

}
}


module.exports = {APIUtils};