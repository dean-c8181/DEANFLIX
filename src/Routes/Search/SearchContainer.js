import React from "react";
import { moviesApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null
    }

    // 텍스트의 빈칸을 확인하고 enter 검색
    handleSubmit = (event) => {
        event.preventDefault();

        const { searchTerm } = this.state;

        if(searchTerm !== ""){
            this.searchByTerm();
        }

    };

    // 인풋에 입력했을때 value값 받아오기
    updateTerm = (event) => {
        const { target: { value }} = event;
        this.setState({
            searchTerm: value
        })
    }

    searchByTerm = async() => {
        const { searchTerm } = this.state;
        this.setState({ loading: true });
        try{            
            const {data: { results: movieResults }} = await moviesApi.search(searchTerm);
            const {data: { results: tvResults }} = await tvApi.search(searchTerm);
            //console.log(movieResults, tvResults);
            this.setState({
                movieResults,
                tvResults
            });
        } catch{
            this.setState({ error: "Can't find results." });
        } finally{
            this.setState({ loading: false });
        }

    };

    render(){
        const { movieResults, tvResults, searchTerm, loading, error } = this.state;
        //console.log(this.state);
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error ={error}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            >
            </SearchPresenter>
        )
    }
}