//api calling in js ---> XMLHttpRequest
//oldest technique
//API--> Application Programming Interface

//----------<<will use>>-------------
//event---> onload(), onerror()
// property ---> response, responseText, responseType, responseURL, status, statusText
//functions ---> open(), send(), setRequestHeader()

const makeRequest = (method, url,data) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    
    xhr.setRequestHeader('Content-type', "application/json");

    xhr.onload = () => {
        let data = xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.send(JSON.stringify(data));
}
//"GET", 'https://jsonplaceholder.typicode.com/posts'
const getData = () => {
    makeRequest("Get", "https://jsonplaceholder.typicode.com/posts");
}

const sendData = () => {
    makeRequest("POST", "https://jsonplaceholder.typicode.com/posts",{
        title : "foo",
        body: "bar",
        userid : 1,
    });

}

const updateData = () => {
    makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1",{
        id: 1,
        title: 'fooma',
        body: 'barma',
        userId: 1,
    });
}

const deleteData = () => {
    makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
}
// getData();
// sendData();
// updateData();
deleteData();
// console.log(window)