// // Step 1 - Create object pof XHR
// const xhr = new XMLHttpRequest()


// // const variable = 'Ram'
// // console.log(Hi my name is ${variable} and I am 20 years old!)

// const url ="https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";

//     // Step 2 - Open the porta; of communication b/w client & the server
//     xhr.open('GET', url)


// // document.querySelector('#some-value').addEventListener('click', () => {
// //     console.log('CLIKCED')
// // })



// // Step 3 - Execute the function when the request state changes
// xhr.onreadystatechange = () => {
 
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const objectResponse = JSON.parse(xhr.responseText)
//         console.log(objectResponse)
//         var output = ''
//         for (let i = 0; i < objectResponse.length; i++) {
//             output += `
//                 <div id="video_box">
                    
                    
//                 <h2>${objectResponse[i].albumId}</h2>
//                 <h3>${objectResponse[i].id}</h3>
//                 <p>${objectResponse[i].title}</p>
//                 <img src="${objectResponse[i].url}"></img>
//                 <img src="${objectResponse[i].thumbnailUrl}"></img>
//             </div>
//             `
//         }
//         console.log(output)
//         document.querySelector('#newsdetails').innerHTML = output
//     }
// }

// // Step 4 - Send the request
// xhr.send()


var photos;
function display_photos() {
    var main = document.getElementById("video-box");
    for (var i = 0; i < 12; i++) {
        var row = document.createElement("DIV");
        row.className = "row-m-3";
        var col = document.createElement("DIV");
        col.className = "col-3";
        var div = document.createElement("DIV");
        div.className = "card";
        var thumbnail = document.createElement("img")
        var img = document.createElement("img");
        var tag_h = document.createElement("h1");
        var tag_t = document.createElement("h3");
        var tag_p = document.createElement("P");


        tag_h.innerHTML = photos[i].title;
        thumbnail.src=photos[i].thumbnailUrl;
        // thumbnail.className="fluid card-img-top";
        img.src = photos[i].url;
        img.className = "fluid card-img-top";
        tag_t.innerHTML=photos[i].id;
        
        // tag_h.innerHTML = movies[i].thumbnailUrl;


        main.appendChild(row);
        row.appendChild(col);
        div.appendChild(tag_t);
        // div.appendChild(thumbnail);
        
        
        col.appendChild(div);
        div.appendChild(img);
        div.appendChild(tag_h);
        div.appendChild(tag_p);
       
        

    }
}
async function read_data(file) {
    let x = await fetch(file);
    let y = await x.text();
    photos = JSON.parse(y);
    console.log(photos);
    display_photos();
}
read_data("https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09");