import { data } from 'react-router-dom';
import conf from '../conf/conf.js';
import { Client,TablesDB,Query } from "appwrite";

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
    async deletePost({slug}){
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
    async getPost({slug}){
        try{
            return await this.getRow({
    databaseId: conf.databaseId,
    tableId: conf.tableId,
    rowId: slug

});
        }
        catch(error){
            console.log("Unable to fetch post");
            console.log(error);
}
    }
    async getPosts(queries= [Query.equal('status',"active")]){
        try{
        return await this.tablesDB.listRows({
            databaseId: conf.databaseId,
            tableId: conf.tableId,
            queries: queries,
        });
        }
        catch(error){
            console.log("Unable to fetch posts");
            console.log(error);
        }
    }
    async uploadFile(file){
        try{
            return await this.bucket.createFile({
                bucketId: conf.bucketId,
                fileId: ID.unique(),
                file: file,
            })
        }
        catch(error){
            console.log("Unable to upload file");
            console.log(error);
        }
    }
    async deleteFile(fileId){
        try{
                await this.bucket.deleteFile({
                bucketId: conf.bucketId,
                fileId: fileId,
                
            })
            return true;
        }
        catch(error){
            console.log("Unable to delete file");
            console.log("Error:", error);
            return false;
        }
        
    }
    async getFilePreview(fileId){
        try{
            return await this.bucket.getFilePreview({
                bucketId: conf.bucketId,
                fileId: fileId,
            });
        }
        catch(error){
            console.log(error);
            console.log("Unable to get file preview");
        }
    }
}
const service = new Service();
export default service;