import styled from "styled-components";

interface RatingComponentProps {
    rate: number,
    showRateStr: boolean,
}

function Rating({ rate, showRateStr }: RatingComponentProps) {

    return (
        <RatingDiv>
            <RatingStarSpan className={Math.round(rate) >= 1 ? 'checked' : ''}>★</RatingStarSpan>
            <RatingStarSpan className={Math.round(rate) >= 2 ? 'checked' : ''}>★</RatingStarSpan>
            <RatingStarSpan className={Math.round(rate) >= 3 ? 'checked' : ''}>★</RatingStarSpan>
            <RatingStarSpan className={Math.round(rate) >= 4 ? 'checked' : ''}>★</RatingStarSpan>
            <RatingStarSpan className={Math.round(rate) >= 5 ? 'checked' : ''}>★</RatingStarSpan>
            {showRateStr ? <RatingSpan>({rate})</RatingSpan> : ''}
        </RatingDiv>
    )
}

export default Rating


const RatingDiv = styled.div`
display : flex;
align-items : center;
gap : 0.1em;
& .checked{
    color : #f4af29;
}
`

const RatingStarSpan = styled.div`
    font-size : 1.3em;
    color : #c3cedb;
`

const RatingSpan = styled.span`
    font-size : 1.1em;
    font-weight : 500;
    color : #5c5c5c;
    margin-left : 0.2em;
`