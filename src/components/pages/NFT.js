import React from 'react';
import IframeResizer from 'iframe-resizer-react'

function NFT() {
    return(
        <div className="nftContainer">
            <IframeResizer
                log
                src="https://oncyber.io/ashleyyy"
                className="nftIframe"
            />
            
        </div>
    );
}

export default NFT;