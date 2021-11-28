import React, {useEffect, useState} from "react";
import {getMovies} from "../../services/api";
import {
    DESCRIPTION_SYMBOLS_QUANTITY,
    IMG_W185_H278_PATH_BASE,
    IMG_W350_H196_PATH_BASE,
    MOBILE_WIDTH,
    PAGINATION_ITEMS_PER_PAGE,
    TIME_PROTECTION_MS
} from "../../constants/constants";
import {monthDecoder} from "../../helpers/helpers";
import Pagination from "@mui/material/Pagination";
import SearchIcon from "../../assets/images/icon-search.png";
import '../../styles/main.scss';
import './MovieSearchPage.scss';


export default function MovieSearchPage() {
    const currentPageInitial = 1;
    const initialCustomerSearch = '';

    const [data, setData] = useState<any>(null);
    const [isProcess, setIsProcess] = useState(true);
    const [currentPage, setCurrentPage] = useState(currentPageInitial);
    const [customerSearch, setCustomerSearch] = useState(initialCustomerSearch);
    const [tmpCustomerSearch, setTmpCustomerSearch] = useState(initialCustomerSearch);

    const resetCurrentPageToInitial = () => {
        setCurrentPage(currentPageInitial);
    };

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
            resetCurrentPageToInitial();
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
                           value={tmpCustomerSearch}
                           autoComplete="off"
                           onChange={(e) => setTmpCustomerSearch(e?.target?.value)}
                    />
                    <div className="input-group-append">
                        <button type="submit" id="search-btn" className="btn btn-outline-secondary">
                            <i className="icon icon-search">
                                <img src={SearchIcon} alt="icon-search"/>
                            </i>
                        </button>
                    </div>
                </div>
            </form>
        );
    };

    const renderSearchResultItem = (itemData: any, itemIndex: number) => {
        const {id, title, release_date, vote_average, overview, poster_path} = itemData;

        let tempDateStr;

        try {
            const tempDate = new Date(release_date);

            tempDateStr = tempDate.getDate() + ' ' + monthDecoder(tempDate.getMonth()) + ' ' + tempDate.getFullYear()
        } catch (error) {
            tempDateStr = release_date;
        }

        const tempDescrStr = overview.length > DESCRIPTION_SYMBOLS_QUANTITY ?
            overview.slice(0, DESCRIPTION_SYMBOLS_QUANTITY - 3) + '...' : overview;

        const currentImgBase = window.innerWidth > MOBILE_WIDTH ? IMG_W185_H278_PATH_BASE : IMG_W350_H196_PATH_BASE;

        return (
            <div className="item" key={`item-${id}`}>
                <div className="img-cont">
                    <a className="link" href="" target="_blank">
                        <img className="poster"
                             src={`${currentImgBase}${poster_path}`}
                             alt="video img"
                        />
                    </a>
                </div>
                <div className="info-cont">
                    <a className="link" href="" target="_blank">
                        <h3 className="name">{title}</h3>
                    </a>
                    <p className="date">{tempDateStr}</p>
                    <p className="rating">{`Рейтинг: ${vote_average}`}</p>
                    <p className="description">{tempDescrStr}</p>
                    <p className="detail-info">
                        <a className="link" href="" target="_blank">Подробнее</a>
                    </p>
                </div>
            </div>
        );
    };

    const renderSearchResults = (data: any) => {
        const isDataNotEmpty = data && data?.length;
        const title = isDataNotEmpty ? 'Найденные фильмы' : 'По вашему запросу ничего не найдено';

        return (
            <div className="search-results" id="search-results">
                <h2 className="results-title">{title}</h2>

                {isDataNotEmpty && (
                    <>
                        <div className="results-cont">
                            {data?.map((itemData: any, itemIndex: number) => renderSearchResultItem(itemData, itemIndex))}
                        </div>

                        {renderPagination()}
                    </>

                )}
            </div>
        );
    };

    const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    const renderPagination = () => {
        //TODO: refactor the code - to implement separate component
        const { total_pages, total_results} = data;

        const startNumber = PAGINATION_ITEMS_PER_PAGE * (currentPage - 1) + 1;
        const lastNumber = (currentPage === total_pages) ? total_results : PAGINATION_ITEMS_PER_PAGE * currentPage;

        const text_showing = 'Showing';
        const text_to = 'to';
        const text_of = 'of';
        const text_entries = 'entries';

        const totalInfo = `${text_showing} ${startNumber} ${text_to} ${lastNumber} ${text_of} ${total_results} ${text_entries}`;

        return (
            <div className={'pagination-cont'}>
                <span className={'pagination__total-info'}>{totalInfo}</span>
                <Pagination count={total_pages}
                            page={currentPage}
                            onChange={handlePaginationChange}
                />
            </div>
        );
    }


    return (
        <section className="movie-search-section">
            <div className="container">
                <h1>
                    React Movie search engine!
                </h1>

                {renderCustomerSearchFilter()}

                {renderSearchResults(data?.results)}
            </div>
        </section>
    );

    /*return (
      <div className={'movie-search-page'}>
          <h1 className={'app-header'}>React Movie Search is coming soon ... !</h1>
      </div>
    );*/
};