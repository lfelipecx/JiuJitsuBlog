import React from "react"

const Analytics = () => {
    return ( 
        <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=G-W7C9GHENQ5`} />
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-W7C9GHENQ5', {page_path: window.location.pathname});
                    `             
            
                }}
                />        
        </>


     );
}
 
export default Analytics;
