import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../common/constants";

export default function PostBook() {
    const [bookName, setBookName] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [author, setAuthor] = useState();

    function handleSubmit(e) {
        e.preventDefault();

        axios.post(baseUrl + '/books', {
            bookName: bookName,
            price: price,
            category: category,
            author: author
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <label>Book Name: </label><input value={bookName} onChange={(e) => setBookName(e.target.value)}  />
            <br />
            <label>Price: </label><input value={price} onChange={(e) => setPrice(e.target.value)}  />
            <br />
            <label>Category: </label><input value={category} onChange={(e) => setCategory(e.target.value)}  />
            <br />
            <label>Author: </label><input value={author} onChange={(e) => setAuthor(e.target.value)}  />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}