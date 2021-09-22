import { useState } from 'react';
import BookList from './BookList';

const Library = ({}) => {
  const [books, setBooks] = useState([
    {id: 1, title: "Green eggs and Ham", author: "Dr. S", cover: "https://media.istockphoto.com/photos/green-eggs-and-ham-with-fork-napkin-picture-id180893692?b=1&k=20&m=180893692&s=170667a&w=0&h=7U36-Lgu4H3NcZdUq3WC4PmuxnWho6QksQvucZM8mRE=" },
    {id: 2, title: "Harry Potter", author: "J.K Roll", cover: "https://images.unsplash.com/photo-1583997052301-0042b33fc598?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
    {id: 3, title: "Hobbit", author: "J.R", cover: "https://images.unsplash.com/photo-1584956861988-913b8c1c7270?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9iYml0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
  ])

  return (
    <>
      <BookList books={books} />
    </>
  )
}

export default Library;