import styled from "styled-components";
import parcel from "../assets/img/parcel.svg";

export default function App() {
    return (
        <PageContainer>
            <img src={parcel} alt="logo" />
            <h1>Lucas Emmanuel</h1>
        </PageContainer>
    )
};

const PageContainer = styled.div`

    width: 100vw;
    height: 100vh;
    background-color: lightblue;
`;