import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import './Detail.css';

const Detail = () => {
    const data = useLocation().state;
    const navigate = useNavigate();
    
    if (!data) {
        return (
            <div className="detail-container">
                <div className="no-data">
                    <h2>영화 정보를 찾을 수 없습니다</h2>
                    <button onClick={() => navigate('/')} className="back-button">
                        홈으로 돌아가기
                    </button>
                </div>
            </div>
        );
    }

    const { title, year, summary, poster, genres } = data;

    return (
        <div className="detail-container">
            <button onClick={() => navigate(-1)} className="back-button">
                ← 뒤로가기
            </button>
            
            <div className="detail-content">
                <div className="detail-poster">
                    <img src={poster} alt={title} />
                </div>
                
                <div className="detail-info">
                    <h1 className="detail-title">{title}</h1>
                    <p className="detail-year">{year}</p>
                    
                    <div className="detail-genres">
                        {genres?.map((genre, index) => (
                            <span key={index} className="genre-tag">
                                {genre}
                            </span>
                        ))}
                    </div>
                    
                    <div className="detail-summary">
                        <h3>줄거리</h3>
                        <p>{summary}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;