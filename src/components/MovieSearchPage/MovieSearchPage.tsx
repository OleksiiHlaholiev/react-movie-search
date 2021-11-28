import React, {useEffect, useState} from "react";
import { getMovies } from "../../services/api";
import {TIME_PROTECTION_MS} from "../../constants/constants";
import SearchIcon from "../../assets/images/icon-search.png";
import '../../styles/main.scss';
import './MovieSearchPage.scss';

export default function MovieSearchPage() {
    const currentPageInitial = 1;
    const initialCustomerSearch = 'Garry';

    const [data, setData] = useState<any>(null);
    const [isProcess, setIsProcess] = useState(true);
    const [currentPage, setCurrentPage] = useState(currentPageInitial);
    const [customerSearch, setCustomerSearch] = useState('Garry');
    const [tmpCustomerSearch, setTmpCustomerSearch] = useState(initialCustomerSearch);


    const loadData = async () => {
        try {
            const queryString = '&query=' + customerSearch + '&language=ru-RU&page=' + currentPage;

            const data = await getMovies('/search/movie', queryString);

            setData(data);
        } catch (error) {
            console.error(error);
            setData(null);
        }
    };

    useEffect(() => {
        (async () => {
            setIsProcess(true);

            await loadData();

            setIsProcess(false);
        })();
    }, [customerSearch, currentPage]);

    /** reload data with debouncing */
    let debounceHandlerCustomerSearch: number = -1;
    useEffect(() => {
        debounceHandlerCustomerSearch = setTimeout((() => {
            // resetCurrentPageToInitial();
            setCustomerSearch(tmpCustomerSearch);
        }) as TimerHandler, TIME_PROTECTION_MS);
        return () => clearTimeout(debounceHandlerCustomerSearch);
    }, [tmpCustomerSearch]);

    const renderCustomerSearchFilter = () => {
        return (
            <form id="search-form" className="form-cont" name="search-form">
                <div className="input-group mb-3">
                    <input type="text"
                           id="search-input"
                           className="form-control"
                           placeholder="Введите название фильма"
                           autoComplete="off"
                           onChange={(e) => setTmpCustomerSearch(e?.target?.value)}
                    />
                    <div className="input-group-append">
                        <button type="submit" id="search-btn" className="btn btn-outline-secondary">
                            <i className="icon icon-search">
                                <img src={SearchIcon} alt="icon-search" />
                            </i>
                        </button>
                    </div>
                </div>
            </form>
        );
    };

    return (
        <section className="movie-search-section">
            <div className="container">
                <h1>
                    React Movie search engine!
                </h1>

                {renderCustomerSearchFilter()}
            </div>
        </section>
    );

    /*return (
      <div className={'movie-search-page'}>
          <h1 className={'app-header'}>React Movie Search is coming soon ... !</h1>
      </div>
    );*/
};