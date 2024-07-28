const sub = document.getElementById("btn");
const actors = document.getElementById("movei_Actors");
const titles = document.getElementById("movei_Title");
const years = document.getElementById("movei_Year");
const xhr = new XMLHttpRequest();

sub.onclick = function() {
    let val = document.getElementById("inputbox").value;
    xhr.open("GET", "http://www.omdbapi.com/?t=" + val + "&apikey=cbf6b4fd");
    xhr.onloadend = load;
    xhr.send();
};

let load = function() {
    if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        let director = response.Director;
        let movieName = response.Title; 
        let year = response.Year;
        actors.innerHTML = "Director: " + director; 
        titles.innerHTML = "Movie name: " + movieName;
        years.innerHTML = "Year: " + year;

        console.log(response);
    } else {
        console.log("Problem");
    }
};
