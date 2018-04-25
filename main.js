var posts=[];
var postIds={};
function addPost(text,id)
{
    posts.push( {"text":text, "id":id } );
}

function renderPosts()
{
    $(".posts").empty();
    for(var i=0; i< posts.length ; i++)
    {
        $(".posts").append("<p class=\"post\" data-id=\""+posts[i]["id"]+"\">"+"<button type=\"button\" class=\"remove\">  REMOVE </button>"+posts[i]["text"]+"</p>");
    }
}

$(".add-post").on("click",function(){

    var postText=$("#post-name").val();
    var postId=generateId();
        addPost(postText,postId);
        renderPosts();


})
$(".posts").on("click",".remove",function(){
    var currentPost=$(this).parent();
    var id=currentPost.data().id;
    postIds[id]=undefined;
    removeFromArrayById(id);
    currentPost.remove();
})
function removeFromArrayById(id)
{
    for(var i=0; i<posts.length;i++)
    {
        if(posts[i]["id"]==id) // only == and not === because one is string and one is a number
        {
            posts.splice(i,1);
            return;
        }

    }
    alert("error in remove from array by id");
}
function generateId()
{
    var id;
    do{
        id=Math.round(Math.random()*1000000);
        if( postIds[id]=== undefined )
        {
            postIds[id]=true;
            return id;
        }
    }
    while(true);
        
}