const Book = ({ image, title, author, id, children, getBook, index }) => {
 
  return (
    <article className="book">
      <span className="number">#{index + 1}</span>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

export default Book
