import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet"
import Loader from "../../Components/Loader"
import Message from "../../Components/Message"

const Container = styled.div`
    height:calc(100vh - 80px);
    width:100%;
    position:relative;
    padding:50px;
`;

const Backdrop = styled.div`
    position:absolute;
    top:0px;
    left:0;
    width:100%;
    height:100%;
    background-image:url(${props => props.bgImage});
    background-position:center;
    background-size:cover;
    filter:blur(3px);
    opacity:0.5;
`;

const Content = styled.div`
    display:flex;
    width:100%;
    position:relative;
    height:100%;
`;

const Cover = styled.div`
    width:30%;
    background-image:url(${props => props.bgImage});
    background-position:center;
    background-size:cover;
    height:100%;
    min-width:450px;
    border-radius:5px;
`;

const Data = styled.div`
    width:70%;
    padding-left:30px;
`;

const Title = styled.h3`
    font-size:32px;
    margin-bottom:10px;
`;

const ItemContainer = styled.div`
    margin:20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
    margin: 0 10px;
`;

const Overview = styled.p`
    font-size:12px;
    opacity:0.7;
    line-height:1.5em;
    text-align:justify;
`;

const ImbdLink = styled.a`
    display:block;
    margin:20px 0;
    color:#f6e58d;
    text-decoration:underline;
`;

// const TabContainer = styled.div``;

// const TabButton = styled.button``;

const TabContents = styled.div`
`;

const Smalltitle = styled.h4`
    font-size:15px;
    margin-bottom:10px;
    margin-top:30px;
`;

const SeriseContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fill, 150px);
    grid-gap:25px;
    margin-top:20px;
`;

const Seriseitems = styled.div``;

const ImageTag  = styled.img`
    width:100%;
`;

const Serise = styled.p`
    text-align:center;
`;

const YTIframe = styled.iframe``;

const DetailPresenter = ({ result, loading, error, buttonSwich }) => (
    loading ? ( 
        <>
            <Helmet><title>Loading | Deanflix</title></Helmet>
            <Loader/> 
        </>
        ) : (
        error ? <Message></Message> : 
        <Container>
            <Helmet><title>{result.original_title ? result.original_title : result.original_name} | Deanflix</title></Helmet>
            <Backdrop 
                bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
            />
            <Content>
                <Cover
                    bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/noPosterSmall.png")} 
                />
                <Data>
                    <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                    <ItemContainer>
                        <Item>{result.release_date ? result.release_date.substring(0,4) : result.first_air_date.substring(0,4)}</Item>
                        <Divider>●</Divider>
                        <Item>{result.runtime ? result.runtime : result.episode_run_time} min</Item>
                        <Divider>●</Divider>
                        <Item>
                            {result.genres && result.genres.map((genre, index) => index === result.genres.length -1 ? genre.name : `${genre.name}/ `)}
                        </Item>
                    </ItemContainer>
                    <Overview>
                        {result.overview}
                    </Overview>
                    <ImbdLink href={result.imdb_id ? `https://www.imdb.com/title/${result.imdb_id}` : result.homepage} target="_blank">
                        {`Visit to homepage of "${result.original_title ? result.original_title : result.original_name}"`}
                    </ImbdLink>

                    <TabContents>
                        <Smalltitle>{result.videos.results.length > 0 && result.videos.results[0].key ? `"${result.original_title ? result.original_title : result.original_name}" Trailer Video` : ""} </Smalltitle>
                        {result.videos.results.length > 0 && result.videos.results[0].key ? 
                            <YTIframe width="560" height="315" src={`https://www.youtube.com/embed/${result.videos.results[0].key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></YTIframe> : 
                            `No Video for "${result.original_title ? result.original_title : result.original_name}"`
                        }                       
                    </TabContents>
                    <div>
                        <Smalltitle>{result.original_title && result.belongs_to_collection ? (result.belongs_to_collection.name ? result.belongs_to_collection.name : "" ) : (result.original_name ? `Sesons of "${result.original_name}"` : "")}</Smalltitle>

                        <SeriseContainer>
                            {result.belongs_to_collection ?
                                <Seriseitems>
                                    <ImageTag src={`https://image.tmdb.org/t/p/w300${result.belongs_to_collection.poster_path}`} /> 
                                </Seriseitems>                             
                            : ""}                        

                            {result.original_name && result.seasons ? (
                                result.seasons.map((ssn, index) => (
                                    <Seriseitems key={index}>
                                        <ImageTag src={ssn.poster_path ? `https://image.tmdb.org/t/p/w300${ssn.poster_path}` : require("../../assets/noPosterSmall.png")} />
                                        <Serise>{`${ssn.name} ${ssn.air_date ? `(${ssn.air_date.substring(0,4)})`  : "" }`}</Serise>
                                    </Seriseitems>
                                ))
                            ) : "" }
                        </SeriseContainer>
                    </div>
                </Data>
            </Content>
        </Container>
    )
);



DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;