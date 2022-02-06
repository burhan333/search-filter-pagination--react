import { useState } from "react"

const Movies = () => {
    const movies = [
        {
          _id: "5b21ca3eeb7f6fbccd471815",
          title: "Terminator",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          numberInStock: 6,
          dailyRentalRate: 2.5,
          publishDate: "2018-01-03T19:04:28.809Z"
        },
        {
          _id: "5b21ca3eeb7f6fbccd471816",
          title: "Die Hard",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          numberInStock: 5,
          dailyRentalRate: 2.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd471817",
          title: "Get Out",
          genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
          numberInStock: 8,
          dailyRentalRate: 3.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd471819",
          title: "Trip to Italy",
          genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
          numberInStock: 7,
          dailyRentalRate: 3.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd47181a",
          title: "Airplane",
          genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
          numberInStock: 7,
          dailyRentalRate: 3.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd47181b",
          title: "Wedding Crashers",
          genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
          numberInStock: 7,
          dailyRentalRate: 3.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd47181e",
          title: "Gone Girl",
          genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
          numberInStock: 7,
          dailyRentalRate: 4.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd47181f",
          title: "The Sixth Sense",
          genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
          numberInStock: 4,
          dailyRentalRate: 3.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd471821",
          title: "The Avengers",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          numberInStock: 7,
          dailyRentalRate: 3.5
        }
    ];
    const [currentPage, setCurrentPage] = useState(1)
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('All')

    const handleFiter = (value) => {
        setFilter(value)
    }

    const SearchedMovies = search ? movies.filter(item => item.title.toLowerCase().includes(search.toLowerCase())) : movies
    const filteredMovies = filter !== 'All' ? SearchedMovies.filter(item => item.genre.name === filter) : SearchedMovies
    const pageSize = 4
    const totalItems = filteredMovies.length
    const totalPages = Math.ceil((totalItems / pageSize))
    const startIndex = (currentPage - 1) * pageSize
    let pageNumbers = []
    for (let i = 1; i <= totalPages; i++)
    {
        pageNumbers.push(i)
    }
    const paginatedMovies = filteredMovies.slice(startIndex, startIndex+pageSize)

    return(
        <div className="movies">
            <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search Movie Title Here..." />
            <div className="movies_box">
                <div className="movies_filters">
                    <span className={filter === 'All' ? 'active' : ''} onClick={() => {handleFiter('All'); setCurrentPage(1)}}>All</span>
                    <span className={filter === 'Action' ? 'active' : ''} onClick={() => {handleFiter('Action'); setCurrentPage(1)}}>Action</span>
                    <span className={filter === 'Thriller' ? 'active' : ''} onClick={() => {handleFiter('Thriller'); setCurrentPage(1)}}>Thriller</span>
                    <span className={filter === 'Comedy' ? 'active' : ''} onClick={() => {handleFiter('Comedy'); setCurrentPage(1)}}>Comedy</span>
                </div>
                <div className="movies_table">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Rental Rate</th>
                                <th>Number In Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedMovies.map((item, index) => {
                                return(
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.genre.name}</td>
                                        <td>{item.dailyRentalRate}</td>
                                        <td>{item.numberInStock}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="movies_pagination">
                {pageNumbers.length > 1 && pageNumbers.map((item, index) => <span key={index} className={item === currentPage ? 'active' : ''} onClick={() => setCurrentPage(index+1)}>{item}</span>)}
            </div>
        </div>
    )
}

export default Movies