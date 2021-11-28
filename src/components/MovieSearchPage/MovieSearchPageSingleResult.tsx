import React, {useEffect, useState} from "react";
import {getMovieById, getMovies} from "../../services/api";
import {monthDecoder} from "../../helpers/helpers";
import {
    DESCRIPTION_SYMBOLS_QUANTITY,
    IMG_W1400_H450_PATH_BASE,
    IMG_W185_H278_PATH_BASE,
    IMG_W300_H450_PATH_BASE,
    IMG_W350_H196_PATH_BASE,
    MOBILE_WIDTH
} from "../../constants/constants";
import {Link, useParams} from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import '../../styles/main.scss';

export default function MovieSearchPageSingleResult() {
    const params = useParams()
    const {id: videoId} = params;
    const [data, setData] = useState<any>(null);
    const [isProcess, setIsProcess] = useState(true);

    console.log('MovieSearchPageSingleResult: ', {params, videoId});

    const loadData = async () => {
        try {
            const data = await getMovieById(videoId as string);

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
    }, []);

    const renderSearchResultItem = (itemData: any) => {
        // TODO: the logic and mark-up
        const {id, title, release_date, vote_average, overview, poster_path} = itemData;

        let tempDateStr;

        try {
            const tempDate = new Date(release_date);

            tempDateStr = tempDate.getDate() + ' ' + monthDecoder(tempDate.getMonth()) + ' ' + tempDate.getFullYear()
        } catch (error) {
            tempDateStr = release_date;
        }

        const currentImgBase = window.innerWidth > MOBILE_WIDTH ? IMG_W300_H450_PATH_BASE : IMG_W350_H196_PATH_BASE;

        console.log('renderSearchResultItem: ', {id});

        return (
            <div className="item" key={`item-${id}`}>
                <div className="img-cont">
                    <img className="poster"
                         src={`${currentImgBase}${poster_path}`}
                         alt="video img"
                    />
                </div>
                <div className="info-cont">
                    <h3 className="name">{title}</h3>
                    <p className="date">{tempDateStr}</p>
                    <p className="rating">{`Рейтинг: ${vote_average}`}</p>
                    <p className="description">{overview}</p>
                    <p className="detail-info">
                        <Link to={'/search'} className="link go-to-main-btn">НА ГЛАВНУЮ</Link>
                    </p>
                </div>
            </div>
        );
    };

    const renderContent = () => {
        const {backdrop_path} = data;
        const backgroundImagePath = `url('${IMG_W1400_H450_PATH_BASE}${backdrop_path}')`;

        return (
            <section className="movie-details-section loaded" style={{'backgroundImage': backgroundImagePath}}>
                <div className="bg-cont">
                    <div className="container">
                        <h1 style={{"display": "none"}}>
                            Detailed information
                        </h1>

                        <div className="search-results">
                            <h2 className="results-title"></h2>
                            <div className="results-cont">
                                {renderSearchResultItem(data)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    };

    return (
        <>
            {isProcess ? (<ProgressBar/>) : (renderContent())}
        </>
    );
}