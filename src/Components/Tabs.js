import React from "react";
import PropType from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    font-size:12px;
`;


const Tabs = ({id, Videos, Production, Countries}) => (
        <Container>
            <div>
                <button></button>
                <button></button>
            </div>
            <div>{title.length > 18 ? `${title.substring(0,15)}...` : title}</div>
            <div>{Production, Countries}</div>
        </Container>
);

Poster.prototype = {
    id: PropType.number.isRequired,
    imageUrl: PropType.string,
    title: PropType.string.isRequired,
    rating: PropType.number,
    year: PropType.string,
    isMovie: PropType.bool
}

export default Tabs;