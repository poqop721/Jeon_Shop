import styled from "styled-components";
import { Item } from "../../../pages/Home";
import DescTb from "./DescTb";

interface DetailPageProps {
    item: Item | undefined,
}

function DetailPage({ item }: DetailPageProps) {
    return (
        <DetailPageDiv>
            {item?.images?.map((url, idx) => {
                return (
                    <img key={idx} src={url} alt={`image_${idx}`} width={'100%'} />
                )
            })}
            <DescTb item={item} />
        </DetailPageDiv>
    )
}

export default DetailPage


const DetailPageDiv = styled.div`
    margin-top : 6em;
    padding : 4em;
    display : flex;
    flex-direction : column;
    gap : 3em;
    @media only screen and (max-width: 480px) {
        margin-top : 2em;
        padding : 1em;
    }
`
