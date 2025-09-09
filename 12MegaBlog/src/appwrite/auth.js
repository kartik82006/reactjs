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
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                return userAccount;
                //call another method to create login session
            }
            else{
                return userAccount;
            }
        } catch(error){
            throw error;
        }
    }
}
const authService = new AuthService()
// made an object so that we can export and use directly using . in other files
export default authService;