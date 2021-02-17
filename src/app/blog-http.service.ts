import { Injectable } from '@angular/core';
// import Http client to make the request
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import observables related code

import {Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs: any;
 public  authToken ='MTJiNmU1YmQwMzVmZmIwYjM3ZTVkNjYzZGM1ZmY5Y2U4NTYzODExNDRkMmVjZTJmNzUxZjc0MTY0NjUxZjE3YjM1MmRjMDA5N2IxNjVjMWNkZDY5MzdkZTA5ZTgxYjM0YTcxMDE3NTMxNDNlNWRhNjFiMWE4ZWY5MzBlYmQ3M2Q3ZQ==';
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  
  constructor( private _http:HttpClient) {
    console.log('blog-http service was called');
  }

  // method to return all the blogs
  public getAllBlogs(): any {
    //fetching data from Api
   let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authToken);
   console.log(myResponse);
   return myResponse;


  }



  // method to get a particular blog
  public getSingleBlogInformation(currentBlogId:any) {
    let myResponse = this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+"?authToken="+this.authToken)
     return myResponse;
  }

  // method to create a blog
  public createBlog(blogData:any){
    let myResponse = this._http.post(this.baseUrl+'/create' + '?authToken='+this.authToken,blogData)
    return myResponse;

  }
   // method to deelete a blog
   public deleteBlog(blogId:any){
     let myResponse = this._http.post(this.baseUrl+ '/'+blogId+'/delete'+'?authToken='+this.authToken ,blogId);
     return myResponse;
   }
   // method to Edit a blog

   public editBlog(blogId:any,blogdata:any){
     let myResponse = this._http.put(this.baseUrl +'/'+blogId+'/edit'+ '?authToken='+this.authToken,blogId,blogdata)
     return myResponse;
   }
}
