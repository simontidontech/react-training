import Book from './Book';

export default function Books({ books }) {
    const bookItems = books.map((book) =>
        <li key={book.id}>
            <Book book={book} />
        </li>
    );

    return (
        <ul>
            {bookItems}
        </ul>
    )
}