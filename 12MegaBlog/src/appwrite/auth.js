import conf from '../conf/conf.js';
import { Client, Account,ID } from 'appwrite';


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.projectEndpoint)
            .setProject(conf.projectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create({userId: ID.unique(), email: email, password: password, name: name});
            if(userAccount){
                
                return this.login({email,password});
                //call another method to create login session
            }
            else{
                return userAccount;
            }
        } catch(error){
            throw error;
        }
    }
    async login({email,password}){
        try{
            await this.account.createEmailPasswordSession({
                email:email,
                password:password
            });
        } catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try {
        // If successful, user is authenticated
        const user = await this.account.get();
        console.log("User is authenticated:", user);
        return user;
    } catch (error) {
        console.error("User is not authenticated:", error);
        // Redirect to login page or show login UI
        // window.location.href = '/login';
        return null;
    }
    return null;
    }

    async logout(){
        try{
            await this.account.deleteSession({
                sessionId: 'current'
            });
        }
        catch(error){
            console.log("unable to logout", error);
        }
    }
}
const authService = new AuthService()
// made an object so that we can export and use directly using in other files
export default authService;