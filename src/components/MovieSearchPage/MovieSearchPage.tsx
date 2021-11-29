import MovieSearchPageResults from "./MovieSearchPageResults";
import MovieSearchPageSingleResult from "./MovieSearchPageSingleResult";

import {
    Route,
    BrowserRouter as Router,
    Routes,
    Navigate,
} from "react-router-dom";

export default function MovieSearchPage () {
    return (
        <Router>
            <Routes>
                <Route path="/react-movie-search" element={<MovieSearchPageResults/>} />
                <Route path="/react-movie-search/:id" element={<MovieSearchPageSingleResult />} />

                {/*<Route path="/search" element={<MovieSearchPageResults />}>
                    <Route path=":id" element={<MovieSearchPageSingleResult />} />
                </Route>*/}

                <Route path="*" element={<Navigate to="/react-movie-search" replace />} />
            </Routes>
        </Router>
    );
}