export default function Book({ book }) {
    return (
        <div>
            <h2>{book.bookName}</h2>
            <p><b>Id:</b> {book.id}</p>
            <p><b>Price:</b> {book.price}</p>
            <p><b>Category:</b> {book.category}</p>
            <p><b>Author:</b> {book.author}</p>
        </div>
    )
}