import React from "react";
import HomePresenter from "./HomePresenter";
// HomeContainer는 state(상태값)을 가진 모든 리액트 컴포넌트


export default class extends React.Component{
    state = {
        nowPlaying: null,
        upcomimg: null,
        popular: null,
        error: null,
        loading: true
    }

    render(){
        const {nowPlaying, upcomimg, popular, error, loading} = this.state;

        return(
            <HomePresenter 
                nowPlaying={nowPlaying} 
                upcomimg={upcomimg} 
                popular={popular}
                error={error}
                loading={loading}            
            >
            </HomePresenter>
        )
    }
}