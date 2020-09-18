import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section"
import Loader from "../../Components/Loader"
import Message from "../../Components/Message"
// Presenter는 레이아웃

const Container = styled.div`
    padding: 0 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => loading ? (
<Loader />
) : (
// Section.js의 구조를 가져오는데 title은 prop값, 안의 내용은 children이라 아래처럼 구조가 들어간다.
/*
    const Section = ({title, children}) => (
        <Container>
            <Title>{title}</Title>
            <Grid>{children}</Grid>
        </Container>
    );
*/
    <Container>
        {nowPlaying && nowPlaying.length > 0 && (       /* nowPlaying이 존재하고, null이 아니면 아래 실행 */
            <Section title="Now Playing"         /* children={nowPlaying.map(movie => movie.title)} */>
                {nowPlaying.map(movie => (
                    <span key={movie.id}>{movie.title}</span>
                )) /* 자식*태그안쪽에) 넣지 않고 title처럼 prop에 넣어도 된다. */}     
            </Section>
        )}
        {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming Moivies">
                {upcoming.map(movie => (
                    <span key={movie.id}>{movie.title}</span>
                ))}
            </Section>
        )}
        {popular && popular.length > 0 && (
            <Section title="Popular Moivies">
                {popular.map(movie => (
                    <span key={movie.id}>{movie.title}</span>
                ))}
            </Section>
        )}
        {error && <Message color="#e74c3c" text={error}></Message>}
    </Container>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};


export default HomePresenter;