import styled from "styled-components";
import { Item } from "../../../pages/Home";
import Info from "./Info";

interface InfoBoxProps {
    item: Item | undefined,
}

function InfoBox({ item }: InfoBoxProps) {
    return (
        <InfoBoxDiv>
            <InfoImg src={item?.thumbnail} alt={`thumbnail_${item?.id}`} />
            <Info item={item}/>
        </InfoBoxDiv>
    )
}

export default InfoBox


const InfoBoxDiv = styled.div`
    width : 90%;
    display : flex;
    justify-content : flex-start;
    gap : 2em;
    padding-bottom : 5em;
    border-bottom : 1px solid #e6e6e6;
    @media only screen and (max-width: 480px) {
        flex-direction : column;
        padding-bottom : 2em;
        border-bottom : 1px solid #b1b1b1;
    }
    
`

const InfoImg = styled.img`
    max-height:50em;
`