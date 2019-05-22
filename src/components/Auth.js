import auth0 from "auth0-js";

export default class Auth{
    auth0= new auth0.WebAuth({

        domain: "isis2503-jdcarrillor.auth0.com",
        clientID: "8ywcQiN8stiYLzKAPUmGIblxj8YJzPYg",
        redirectUri: "http://localhost:3000/",
        audience: "https://isis2503-jdcarrillor.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid"

    })


    handleAuthentication(){
        this.auth0.parseHash((err, authResults)=>{
            if (authResults && authResults.accessToken && authResults.idToken){

                let expiresAt= JSON.stringify((authResults.expiresIn)* 1000 + new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);

              //withRouter.history.push('/ProductoList');

            }
            
        })
    }

    isAuthenticated(){

         let expiresAt =JSON.parse(localStorage.getItem("expires_at"));
         return new Date().getTime() < expiresAt;

    }


    constructor(){
        this.login=this.login.bind(this);

    }

    login()
    {
        this.auth0.authorize();
    }
}