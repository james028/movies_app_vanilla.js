import "./styles.css";
const API_KEY = "63b13493";

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const inputValue = document.getElementById("input").value;
  fetchJSON(inputValue);
  document.getElementById("input").value = "";
});

function fetchJSON(e, a) {
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${e}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let output = "";
      data.Search.forEach(function(item) {
        output += `<div class="well">
                      <div class="col-md-4"><img src="${
                        item.Poster
                      }" alt="" /></div>
                      <div class="col-md-8">
                        <div>${item.Title}</div>
                        <div>${item.Year}</div>
                      </div>
                    </div>`;
      });
      document.getElementById("cont").innerHTML = output;
    })
    .catch(err => console.log(err));
}
