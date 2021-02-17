import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // declarea dummy blog variable here
  public allBlogs = [
    {
      blogId: '1',
      lastModified: "2013-10-10",
      created: "2013-2-10",
      tags: [],
      author: "Admin",
      category: "comedy",
      isPublished: true,
      views: 0,
      bodyHtml: "this is blog body",
      description: "this is blog 1 description",
      title: "this is blog1"

    },
    {
      blogId: '2',
      lastModified: "2013-11-10",
      created: "2013-3-10",
      tags: [],
      author: "Admin",
      category: "comedy",
      isPublished: true,
      views: 0,
      bodyHtml: "<h1>this is big text</h1> <p> small text</p>",
      description: "this is description of the example blog",
      title: "this is an example blog"

    },
    {
      blogId: '3',
      lastModified: "2013-11-10",
      created: "2013-5-10",
      tags: [],
      author: "Admin",
      category: "comedy",
      isPublished: true,
      views: 0,
      bodyHtml: "this is blog body.this is blog body. this is blog body",
      description: "this is  third blog  description",
      title: "this is the third  blog"
    },
  ];
  public currentBlog: any;

  constructor() {
   
    console.log("service constructor is called");
  }

  // method to return all the blogs
   public getAllBlogs():any{
    return this.allBlogs;
  }



// method to get a particular blog
  public getSingleBlogInformation(currentBlogId: any): any {
    // using a for of loop
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }

}
