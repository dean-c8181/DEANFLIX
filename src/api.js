// Axios 설치(yarn add axios) : Axios는 HTTP request 와 작업하기 좋다.
//항상 동일한 api주소부분을 변수에 담음.

import axios from "axios"

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params: {
        api_key:"2c3f1e70d34b20832fe93250a1628a57",
        language: "en-US"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) => 
        api.get(
        `movie/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: (term) => 
        api.get("search/movie",{
        params:{
            query: encodeURIComponent(term)
        }
    })
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: (id) => 
        api.get(
        `tv/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: (term) => 
        api.get("search/tv",{
        params:{
            query: term
        }
    })
};

// encodeURIComponent 검색의 빈칸과 특수기호를 URI로 인코딩해서 주소창에 보여줌 -- Axios가 알아서 변환해준다는 말이 있어서 Search 까지 다 작업하고 확인 후 한글 검색이 안되면 encodeURIComponent 빼고 확인하기 -- 띄어쓰기 검색 안되서 제거함.