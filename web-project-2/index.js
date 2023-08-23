// const posts = [
//     {
//         title : "This is title 1",
//         body : "This is body 1"
//     },
//     {
//         title : "This is title 2",
//         body : "This is body 2"
//     },
//     {
//         title : "This is title 3",
//         body : "This is body 3"
//     },
//     {
//         title : "This is title 4",
//         body : "This is body 4"
//     },
//     {
//         title : "This is title 5",
//         body : "This is body 5"
//     },
//     {
//         title : "This is title 6",
//         body : "This is body 6"
//     },
//     {
//         title : "This is title 7",
//         body : "This is body 7"
//     },
//     {
//         title : "This is title 8",
//         body : "This is body 8"
//     }
// ]

//fetch data
const fetchData = async (config) =>{
    try{
        const res = await axios(config);
        return res.data;
    }catch(err){
        throw Error("data not found");
    }
   
    // console.log(res.data);
}


// {/* <div class="post">
//             <h4 class="post-title">Post title 1</h4>
//             <p class="post-body">Post Description 1</p>
//         </div> */}

var postsElement = document.querySelector(".posts");

var loadAllData = async () =>{
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post)=>{
        
        // console.log(post);
        var postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
        <h4 class="post-title">${post.title}</h4>
         <p class="post-body">${post.body}</p>
        `;

        postsElement.appendChild(postElement);
    })
    
}

loadAllData();