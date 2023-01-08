import React, { Fragment } from "react";

import "../Styles/seed.css";
export default function Home(props) {
    const { title, subtitle, children } = props;

    return (
        <>
            <div className="w-100 h-100 h-pr-fl-ma b-s-b-b">
                <div className="w-50 h-100  b-s-b-b ">
                    <div className="w-100 h-a h-pr-fl-ma r-v-c b-s-b-b ">



                        {title && <h1
                            className="f-f-Gilroy c-white r-v-c h-a p-l-10px b-s-b-b m-a"
                            Style="font-size: 50px; line-height: 55px;"><b>
                                {title}
                            </b> </h1>}
                        {subtitle && <h1
                            className="f-f-Gilroy c-white r-v-c h-a p-l-10px b-s-b-b m-a"
                            Style="font-size: 25px; line-height: 30px;"><b>
                                {subtitle}
                            </b></h1>
                        }
                        <span className="m-a b-s-b-b divider "></span>
                    </div>
                </div>
            </div>
        </>
    );
}
