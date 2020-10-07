import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet"
import Loader from "../../Components/Loader"
import Message from "../../Components/Message"

const TabList = styled.div`
    height:342px;
    left:0;
    position:absolute;
    transition:all 0.3s;
    z-index:1;
    opacity:1;
`;

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

const TabContents = styled.div`
    padding:20px;
    border: 5px solid rgba(255,255,255,0.2);
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
    margin:20px 0;
`;

const Seriseitems = styled.div``;

const ImageTag  = styled.img`
    width:auto;
    max-width:100%;
    max-height:100%;
`;

const Serise = styled.p`
    text-align:center;
    margin-top:10px;
`;

const YTIframe = styled.iframe``;

const Detailbox = styled.div``;

const DetailCont = styled.div``;

const LogosizeBox = styled.div`
    height:225px;
    position:relative;
    background-color:rgba(255,255,255,0.1);
    ${ImageTag}{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        max-width:calc(100% - 15px);
        max-height:calc(100% - 15px);
    }
`;

const tabBtnStyle = {
    width: '200px',
    height: '30px',
    backgroundColor: '#000',
    color: '#FFF',
    outline:'none',
    border:'none',
    marginRight:'2px',
    borderRadius:'3px',
    cursor:'pointer',
}

const tabUnselect = {
    opacity:'0.5'
}

const DetailPresenter = ({ result, loading, error, buttonSwich, activeTab, clickHandler }) => (
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
                        <Item>{result.release_date ? result.release_date.substring(0,4) : (result.first_air_date ? result.first_air_date.substring(0,4) : "")}</Item>
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
                        <div className="tabWrapper">
                            <ul className="tabs">
                                <button className="tabBttn0 on" style={tabBtnStyle} onClick={() => clickHandler(0)}>Trailer Video</button>
                                <button className="tabBttn1" style={tabBtnStyle} onClick={() => clickHandler(1)}>Production Info</button>
                            </ul>
                            <div className="tabListCont" style={{position:'relative', overflow:'hidden', height:'370px'}}>
                                <TabList className="tbCnt0">
                                <Smalltitle>
                                    {result.videos.results.length > 0 && result.videos.results[0].key ? `"${result.original_title ? result.original_title : result.original_name}" Trailer Video` : ""} </Smalltitle>
                                    {result.videos.results.length > 0 && result.videos.results[0].key ? 
                                        <YTIframe width="560" height="315" src={`https://www.youtube.com/embed/${result.videos.results[0].key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></YTIframe> : 
                                        `No Video for "${result.original_title ? result.original_title : result.original_name}"`
                                    }   
                                </TabList>
                                <TabList className="tbCnt1">
                                    <DetailCont>
                                        {result.production_countries ? (                                           
                                            <Smalltitle>{`◽Production Countries : ${result.production_countries.length > 0 && result.production_countries ? (result.production_countries.map((pdcContr, index) => index === result.production_countries.length -1 ? ` ${pdcContr.name}` : ` ${pdcContr.name}`)) : "No Info"}`}</Smalltitle>
                                            
                                        ) : (                                            
                                            <Smalltitle>{`◽Production Countries : ${result.origin_country.length > 0 && result.origin_country ? result.origin_country.map((pdcContr, index) =>  index === result.origin_country.length -1 ? ` ${pdcContr}` : ` ${pdcContr}` ) : "No Info" }` }</Smalltitle>                                            
                                        )}
                                    </DetailCont> 
                                    <Smalltitle> ◽Production Company</Smalltitle>
                                    <Detailbox>
                                        <SeriseContainer>{result.production_companies.length > 0 && result.production_companies ? (
                                            result.production_companies.map((prdCpn, index) => (
                                                <Seriseitems key={index}>
                                                    <LogosizeBox key={index}>
                                                     <ImageTag src={prdCpn.logo_path ? `https://image.tmdb.org/t/p/w300${prdCpn.logo_path}` : require("../../assets/noPosterSmall.png")} />
                                                    </LogosizeBox>
                                                    <Serise>{prdCpn.name}</Serise>
                                                </Seriseitems>
                                            ))
                                        ) : `__No Info`}                                                                              
                                        </SeriseContainer>                                                                                 
                                    </Detailbox>
                                </TabList>
                            </div>
                        </div>
                                            
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