import React, {useEffect, useState} from "react";
import { getMovies } from "../../services/api";
import './MovieSearchPage.scss';
import {TIME_PROTECTION_MS} from "../../constants/constants";

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

    return (
      <div className={'movie-search-page'}>
          <h1 className={'app-header'}>React Movie Search is coming soon ... !</h1>
      </div>
    );
};