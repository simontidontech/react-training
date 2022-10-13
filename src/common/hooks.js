import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from './constants';

export function useGetBooks(id = "") {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(baseUrl + `/books/${id}`)
        .then(function (response) {
            setBooks(Array.isArray(response.data) ? response.data : [response.data]);
        })
        .catch(() => {
            setBooks([]);
        })
    }, [id]);

    return books;
}