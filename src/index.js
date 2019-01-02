import "./styles.css";
const API_KEY = "63b13493";

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const inputValue = document.getElementById("input").value;
  fetchJSON(inputValue);
  document.getElementById("input").value = "";
});

function fetchJSON(e) {
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${e}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let output = "";
      data.Search.forEach(function(item) {
        output += `<div class="col-sm-4 back-one-row">
                      <div class="row">
                        <div class="col-7"><img  class="img" src="${
                          item.Poster
                        }" alt="" /></div>
                        <div class="col-5">
                          <div>Title: <br /><strong>${item.Title}</strong></div>
                          <div>Year: <br /><strong>${item.Year}</strong></div>
                          <button class="btn">More details</button>
                        </div>
                      </div>
                    </div>`;
      });
      document.getElementById("cont").innerHTML = output;
    })
    .catch(err => console.log(err));
}
