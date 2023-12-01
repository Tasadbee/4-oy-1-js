let elMoveList = document.querySelector('.basic__list')
let partMovies = movies.splice(0,9)

partMovies.forEach((item, index)=> {
    let newLi = document.createElement('li')
    newLi.innerHTML = `
    <div class="newcard__basic" class="card" style="width: 18rem;">
                    <img src="	https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBocnOWO7DdIRC15cToDGT2BBX0Og
                    " class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${item.Title}</h5>
                    <p class="card-text">${item.summary.split(" ").splice(0,10).join(" ")}</p>
                    <p>${item.movie_year}</p>
                    <p>${item.imdb_rating}</p>
                    <a href="https://www.youtube.com/watch?v=${item.ytid}" class="btn btn-primary" target="_blank">WATCH MOVIE</a>
                    </div>
                    </div>
    `
    elMoveList.appendChild(newLi)
    
});




console.log(arr)


