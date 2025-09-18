import { data } from 'react-router-dom';
import conf from '../conf/conf.js';
import { Client,TablesDB } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    latestRowId= null;
    
    constructor(){
        this.client
        .setEndpoint(conf.projectEndpoint) // Your API Endpoint
        .setProject(conf.projectId); // Your project ID

        this.tablesDB = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            const response =  await this.tablesDB.createRow({

            databaseId: conf.databaseId,
            tableId: conf.tableId,
            rowId: slug,
            data: {
                title,
                slug,
                content,
                featuredImage,
                status,
                userId,

            }
            });

             

            return response;
            
        }
        catch(error){
            console.log("Appwrite Service :: createPost :: error");
            console.log(error);
        }
    }
    async updatePost({title,slug,content,featuredImage,status,userId}){
        try{
        return await this.tablesDB.updateRow({
        databaseId: conf.databaseId,
        tableId: conf.tableId,
        rowId: slug,
        data: {
            title: title,
            content: content,
            status: status,
            userId: userId,
            featuredImage: featuredImage,
            slug: slug,
        }, 
        
});
    }
    catch(error){
        console.log("Unable to update post");
        console.log(error);
    }
    }
    async deleteRow({slug}){
        try{
            await this.tablesDB.deleteRow({
                databaseId: conf.databaseId,
                tableId: conf.tableId,
                rowId: slug,
            })
            return true;
        }
        catch(error){
            console.log("Unable to delete row");
            console.log(error);
            return false;
        }
    }
}
const service = new Service();
export default service;