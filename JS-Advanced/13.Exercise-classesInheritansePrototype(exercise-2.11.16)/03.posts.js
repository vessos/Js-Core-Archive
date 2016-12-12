/**
 * Created by MARK-Max on 2.11.2016 г..
 */
function posts() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            return this.comments.push(comment);
        }

        toString() {
            let baseStr = super.toString();
            let newString = '';
            newString += baseStr + `\nRating: ${this.likes - this.dislikes}`;
            if(this.comments.length!=0){
                newString+=`\nComments:`;
                for (let comment of this.comments) {
                    newString += `\n * ${comment}`
                }
            }
            return newString;
        }
    }
    class BlogPost extends Post{
        constructor(title,content,view){
            super(title,content);
            this.views=view;
        }
        view(){
            this.views++;
            return this;
        }
        toString(){
            let newStr = super.toString();
            newStr+=`\nViews: ${this.views}`;
            return newStr;
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

let classes = posts();
let Post = classes.Post;
let SocialMediaPost = classes.SocialMediaPost;
let BlogPost = classes.BlogPost;


//let post = new Post("Post", "Content");

//console.log(post.toString());

// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 20, 0);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
console.log(1);

let np = new BlogPost('title','newcontent',5);
np.view();
np.view();
console.log(np.toString());
let ng = new BlogPost('title','newcontent',0);
ng.view();
ng.view();
np.view()
console.log(ng.toString());
console.log(1);
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
