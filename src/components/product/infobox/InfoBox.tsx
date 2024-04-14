import styled from "styled-components";
import { Item } from "../../../pages/Home";
import { ImageDiv, Image } from "../../shared/ImageDivStyle";
import Info from "./Info";

interface InfoBoxProps {
    item: Item | undefined,
}

function InfoBox({ item }: InfoBoxProps) {
    return (
        <InfoBoxDiv>
            <ImageDiv style={{ backgroundImage: `url(${item?.thumbnail})` }} $page={'product'}>
                <Image src={item?.thumbnail} alt={`thumbnail_${item?.id}`} />
            </ImageDiv>
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
`