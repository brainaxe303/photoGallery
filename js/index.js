
var photos;
function display_photos() {
    var main = document.getElementById("photo-box");
    for (var i = 0; i < 24; i++) {
        var row = document.createElement("DIV");
        row.className = "col-lg-3 col-md-4 ";
        var col = document.createElement("DIV");
        col.className = "col-sm-3 card-deck";
        var div = document.createElement("DIV");
        div.className = "card";
        var thumbnail = document.createElement("img")
        var img = document.createElement("img");
        img.setAttribute("height", "matchparent");
        img.setAttribute("width", "100%");
        img.className =" img-fluid img-adjusted";
        var tag_h = document.createElement("p");

        var tag_t = document.createElement("a");
        var tag_p = document.createElement("P");

 


        tag_h.innerHTML = photos[i].title;
        tag_h.className="card-text";
        thumbnail.src=photos[i].thumbnailUrl;
        // thumbnail.className="fluid card-img-top";
        img.src = photos[i].url;

        img.className = "fluid card-img-top";
        tag_t.innerHTML=photos[i].id;
        tag_t.className="btn btn-dark";
        tag_t.href="${photos.url}";
        
        
        
        // tag_h.innerHTML = movies[i].thumbnailUrl;


        main.appendChild(row);
        row.appendChild(col);
        div.appendChild(tag_t);
        // div.appendChild(thumbnail);
        
        
        col.appendChild(div);
        col.appendChild(img);
        col.appendChild(tag_h);
        col.appendChild(tag_p);
       
        

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