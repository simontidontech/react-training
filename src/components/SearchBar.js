import { useEffect, useState } from 'react'
import axios from 'axios';
import { baseUrl } from '../common/constants';
import Books from './Books';

export default function SearchBar() {
    const [value, setValue] = useState("");
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(baseUrl + `/books/${value}`)
            .then(function (response) {
                setBooks(Array.isArray(response.data) ? response.data : [response.data]);
            })
            .catch(() => {
                setBooks([]);
            })
    }, [value])

    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <Books books={books} />
        </div>
    )
}