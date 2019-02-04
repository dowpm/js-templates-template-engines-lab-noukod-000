function createPost(e){
    e.preventDefault();

    let titlePost = document.getElementById('postTitle').value;
    let bodyPost = document.getElementById('postBody').value;
    let authorPost = document.getElementById('postAuthor').value;

    let pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
    let postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
    let commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);

    let main = document.getElementsByTagName('main')[0];
    main.innerHTML += pageTemplateFn();

    let divPost = document.getElementById('post');
    let blogSection = postTemplateFn({ title: titlePost, body: bodyPost, poster: authorPost});
    let commentSection = commentsTemplateFn();

    divPost.innerHTML += blogSection;
    divPost.innerHTML += commentSection;
    
}

function postComment(e){
    e.preventDefault();

    let commenter = document.getElementById('commenter').value;
    let comment = document.getElementById('comment').value;

    let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

    let commentSection = commentTemplate({commenter: commenter, comment: comment});

    let divComments = document.getElementById('comments');
    divComments.innerHTML += commentSection;
}