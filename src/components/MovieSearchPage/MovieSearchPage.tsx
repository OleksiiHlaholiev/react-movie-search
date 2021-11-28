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
                <Route path="/search" element={<MovieSearchPageResults/>} />
                <Route path="/search/:id" element={<MovieSearchPageSingleResult />} />

                {/*<Route path="/search" element={<MovieSearchPageResults />}>
                    <Route path=":id" element={<MovieSearchPageSingleResult />} />
                </Route>*/}

                <Route path="*" element={<Navigate to="/search" replace />} />
            </Routes>
        </Router>
    );
}