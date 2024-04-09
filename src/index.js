// Your code here

document.addEventListener('DOMContentLoaded', () => {
    
    const fetchMovieDetails = async () => {
        try {
            const response = await fetch('http://localhost:3000/films/1');
            if (!response.ok) {
                throw new Error('Failed to fetch movie details');
            }
            const movieData = await response.json();
            displayMovieDetails(movieData);
        } catch (error) {
            console.error('Error fetching movie details:', error);
        }
    };

    
    const displayMovieDetails = (movie) => {
        const movieContainer = document.getElementById('movie-details');

        
        const titleElement = document.createElement('h2');
        titleElement.textContent = movie.title;

        const runtimeElement = document.createElement('p');
        runtimeElement.textContent = `Runtime: ${movie.runtime} minutes`;

        const showtimeElement = document.createElement('p');
        showtimeElement.textContent = `Showtime: ${movie.showtime}`;

        const ticketsElement = document.createElement('p');
        const availableTickets = movie.capacity - movie.tickets_sold;
        ticketsElement.textContent = `Available Tickets: ${availableTickets}`;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = movie.description;

        const posterElement = document.createElement('img');
        posterElement.src = movie.poster;
        posterElement.alt = movie.title;

       
        movieContainer.appendChild(titleElement);
        movieContainer.appendChild(runtimeElement);
        movieContainer.appendChild(showtimeElement);
        movieContainer.appendChild(ticketsElement);
        movieContainer.appendChild(descriptionElement);
        movieContainer.appendChild(posterElement);
    };

    
    fetchMovieDetails();
});

document.addEventListener('DOMContentLoaded', () => {
    const moviesData = [
        {
            "id": "1",
            "title": "The Giant Gila Monster",
            "runtime": "108",
            "capacity": 30,
            "showtime": "04:00PM",
            "tickets_sold": 27,
            "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
            "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
        },
        
    ];

    const fetchMovieDetails = async (id) => {
        const movie = moviesData.find(movie => movie.id === id);
        if (movie) {
            displayMovieDetails(movie);
        } else {
            console.error('Movie not found');
        }
    };

    const fetchAllMovies = () => {
        displayMovieMenu(moviesData);
    };

    const displayMovieMenu = (movies) => {
        const menuContainer = document.getElementById('movie-menu');
        menuContainer.innerHTML = '';

        movies.forEach(movie => {
            const listItem = document.createElement('li');
            listItem.textContent = movie.title;
            listItem.classList.add('film-item'); 
            listItem.addEventListener('click', () => {
                fetchMovieDetails(movie.id);
            });
            menuContainer.appendChild(listItem);
        });
    };

    const displayMovieDetails = (movie) => {
        
    };

    fetchAllMovies(); 
});