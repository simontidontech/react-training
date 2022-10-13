import { useRecoilValue } from "recoil";
import { searchState } from "../common/atoms";
import SearchBar from "../components/SearchBar";
import Books from "../components/Books";
import { useGetBooks } from "../common/hooks";

export default function Search() {
    const searchString = useRecoilValue(searchState);
    const books = useGetBooks(searchString);

    return (
        <div>
            <SearchBar />
            {books.length === 0 && <p>No books found</p>}
            <Books books={books} />
        </div>
    )
}