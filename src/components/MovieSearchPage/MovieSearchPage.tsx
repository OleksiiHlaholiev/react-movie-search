import MovieSearchPageResults from "./MovieSearchPageResults";
import {
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";

export default function MovieSearchPage () {
    return (
        <Router>
            <Routes>
                <Route path="/search" element={<MovieSearchPageResults/>} />

                <Route path="*" element={<MovieSearchPageResults/>} />
            </Routes>
        </Router>

    );
}