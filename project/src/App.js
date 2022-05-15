import  React from 'react'
import MovieList from './movie';
import SearchBar  from './SearchBar';
import NavBar from './NavBar';
import './App.css'

function App (){
const [movies,setMovies]=React.useState([  {
  "Title": "Star Wars",
  "Year": "1977",
  "imdbID": "tt0076759",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
  "Title": "Star Wars: Episode V - The Empire Strikes Back",
  "Year": "1980",
  "imdbID": "tt0080684",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
  "Title": "Star Wars: Episode VI - Return of the Jedi",
  "Year": "1983",
  "imdbID": "tt0086190",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},
{
  "Title": "Star Wars: Episode VII - The Force Awakens",
  "Year": "2015",
  "imdbID": "tt2488496",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
},
{
  "Title": "Star Wars: Episode I - The Phantom Menace",
  "Year": "1999",
  "imdbID": "tt0120915",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},
{
  "Title": "Star Wars: Episode III - Revenge of the Sith",
  "Year": "2005",
  "imdbID": "tt0121766",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
},
{
  "Title": "Star Wars: Episode II - Attack of the Clones",
  "Year": "2002",
  "imdbID": "tt0121765",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
},
{
  "Title": "Star Wars: Episode VIII - The Last Jedi",
  "Year": "2017",
  "imdbID": "tt2527336",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
},
{
  "Title": "Rogue One: A Star Wars Story",
  "Year": "2016",
  "imdbID": "tt3748528",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
},
{
  "Title": "Star Trek",
  "Year": "2009",
  "imdbID": "tt0796366",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"
}
, {
  "Title": "Eden Lake",
  "Year": "2008",
  "imdbID": "tt1020530",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZDY5OTM3YjItMjBmZS00NmRhLTljYzAtZmE1NzRkZmFhM2EwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
},
{
  "Title": "East of Eden",
  "Year": "1955",
  "imdbID": "tt0048028",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjVhYTE5NmUtNDJkNS00ZDY2LWFkMzYtY2YwZGZlMGNmYjVhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
},
{
  "Title": "Eden",
  "Year": "2012",
  "imdbID": "tt1734433",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzAxNTg3NTUzN15BMl5BanBnXkFtZTcwMTMwMDcwOQ@@._V1_SX300.jpg"
},
{
  "Title": "Exit to Eden",
  "Year": "1994",
  "imdbID": "tt0109758",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDliZWUwYzktMzU1OC00NzNmLThlODYtODhkMTc4MDkyOWE1XkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg"
},
{
  "Title": "Eden Log",
  "Year": "2007",
  "imdbID": "tt1087842",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTk0NTg5MDE0OV5BMl5BanBnXkFtZTcwNjUxNjQyMg@@._V1_SX300.jpg"
},
{
  "Title": "Martin Eden",
  "Year": "2019",
  "imdbID": "tt4516162",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BM2NlYzg4ZDYtYjAwMC00YmZmLWFhMzYtNTBhNDIwMTRlYTQ1XkEyXkFqcGdeQXVyMjI3NDAyNg@@._V1_SX300.jpg"
},
{
  "Title": "Eden",
  "Year": "2014",
  "imdbID": "tt3090634",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxODczMzM1MV5BMl5BanBnXkFtZTgwNzczNTE3NTE@._V1_SX300.jpg"
},
{
  "Title": "Big Eden",
  "Year": "2000",
  "imdbID": "tt0212815",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNmJhM2Q1NDItMGVhNi00ZTg5LTkwMmMtODQ3NmNlMjNiOGJiXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg"
},
{
  "Title": "Higashi no Eden",
  "Year": "2009",
  "imdbID": "tt1415054",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNGE3MTc0NDQtYWM0Zi00NGQ2LWFkNTQtNzczMGVmMzVjNTIwXkEyXkFqcGdeQXVyMjY4MDc1MDA@._V1_SX300.jpg"
},
{
  "Title": "Close to Eden",
  "Year": "1991",
  "imdbID": "tt0103176",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BM2EwMTg5ZmQtNTc5MS00NjI4LWI2OWItMTJkMzBiZGIwY2Q2XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg"
}]);
const [search,setSearch]=React.useState([' ' ]);


const getMovies=async(search)=>{
  const response=await fetch(`http://www.omdbapi.com/?s=${search}&apikey=6e8bfaf5`);
 const res=await response.json()
 console.log(res)
 if(res.Search){
  setMovies(res.Search)
 }

}

React.useEffect(()=>{
 getMovies(search)
},[ search])

   return (
      <div>
   <div className=' w-screen h-full'>
   <NavBar header='Movies' />
     <SearchBar search={search}  setSearch={setSearch}/>
   </div>
    
     <div >
     <MovieList movies={movies}  />
     </div>

      </div>
   )
}

export default App;
