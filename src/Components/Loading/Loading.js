import React from "react";
import loadingSVG from "../../loading.svg";
import { StyledLoadingInfo } from "./Styled";
/**
 * Renders login animation
 * @returns \<Loading\>
 */
const Loading = (props) => {
    return (
        <div>
            <img src={loadingSVG} alt="Ładowanie" />
            <StyledLoadingInfo>Animacja ładowania z <a href="loading.io">loading.io</a></StyledLoadingInfo>
        </div >
    );
};

export default Loading;
