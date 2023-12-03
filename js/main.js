let elMoveList = document.querySelector('.basic__list')
let partMovies = movies.splice(0,50)
fnMapper(partMovies)
function fnMapper(date) {
    elMoveList.innerHTML = ''
    date.forEach((item, index)=> {
        let newLi = document.createElement('li')
        newLi.innerHTML = `
        <div class="newcard__basic" class="card" style="width: 18rem;">
                        <img src="	https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBocnOWO7DdIRC15cToDGT2BBX0Og
                        " class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${item.Title.toString().split(" ").splice(0,2).join(" ")}}..</h5>
                        <p class="card-text">${item.summary.split(" ").splice(0,3).join(" ")}..</p>
                        <p>${item.movie_year}</p>
                        <p>${item.imdb_rating}</p>
                        <a href="https://www.youtube.com/watch?v=${item.ytid}" class="btn btn-primary" target="_blank">WATCH MOVIE</a>
                        </div>
                        </div>
        `
        elMoveList.appendChild(newLi)
        
    });
}
function fnYear(year){
    if(year == 'old'){
        fnMapper(partMovies.sort((a,b)=> a.movie_year - b.movie_year));
    }else{
        fnMapper(partMovies.sort((a,b)=> b.movie_year - a.movie_year));

    }
}
function fnRate(ranting) {
    console.log(ranting)
    if(ranting == 'min'){
        fnMapper(partMovies.sort((a,b)=> a.imdb_rating - b.imdb_rating));
    }else{
        fnMapper(partMovies.sort((a,b)=> b.imdb_rating - a.imdb_rating));

    }
}


let arrCategory = []

partMovies.forEach((item)=>{
    if(arrCategory.includes(item.Categories)){

    }else{
        arrCategory.push(item.Categories)
    }
})
let elSelCat = document.querySelector('.select__Cat')

arrCategory.forEach((item)=>{
    let newOpt = document.createElement('option')
    newOpt.textContent = item
    newOpt.value = item
    elSelCat.appendChild(newOpt)
})
function fnCategory(category) {
    fnMapper(partMovies.filter((item)=> item.Categories == category));
    
}