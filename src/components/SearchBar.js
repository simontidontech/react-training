import { useRecoilState } from 'recoil';
import { searchState } from '../common/atoms';

export default function SearchBar() {
    const [searchString, setSearchString] = useRecoilState(searchState);

    return (
        <div>
            <input value={searchString} onChange={(e) => setSearchString(e.target.value)} />
        </div>
    )
}