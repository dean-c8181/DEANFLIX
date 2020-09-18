import React from "react";
import { moviesApi } from "../../api";
import HomePresenter from "./HomePresenter";
// HomeContainer는 state(상태값)을 가진 모든 리액트 컴포넌트


export default class extends React.Component{
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    }

    // async와 wait는 원래의 JCS라면 데이터를 기다리지 않고 계속 로딩하지만 await의 데이터가 다 로딩(처리) 될 때 까지 기다렸다가 다음 작업을 진행함.
    async componentDidMount(){
        try{
            // object deconstruction 객체비구조화 할당

            const {data: { results: nowPlaying }} = await moviesApi.nowPlaying();
            //const nowPlaying = await moviesApi.upcoming(); console.log(nowPlaying); 콘솔로그에서 데이터확인 후 위에 처럼 바꿔줌

            const {data: { results: upcoming }} = await moviesApi.upcoming();

            const {data: { results: popular }} = await moviesApi.popular();

            this.setState({
                nowPlaying,
                upcoming,
                popular
            })

            //throw Error(); -- 에러발생확인용
            
        } catch{    // catch 는 보통 error메세지 출력
            this.setState({
              error: "Can't find movies infomation."  
            });
        } finally{
            this.setState({
                loading: false
            });
        }
    }

    render(){
        const {nowPlaying, upcoming, popular, error, loading} = this.state;

        console.log(this.state);

        return(
            <HomePresenter 
                nowPlaying={nowPlaying} 
                upcoming={upcoming} 
                popular={popular}
                error={error}
                loading={loading}            
            >
            </HomePresenter>
        )
    }
}