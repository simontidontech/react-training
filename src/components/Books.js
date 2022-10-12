import Book from './Book';

export default function Books({ books }) {
    const bookItems = books.map((book) =>
        <li>
            <Book book={book} />
        </li>
    );


    return (
        <ul>
            {bookItems}
        </ul>
    )
}