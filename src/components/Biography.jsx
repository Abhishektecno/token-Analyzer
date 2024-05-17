import React from "react";

const Biography= ({imageUrl}) => {
    return (
        <>
        <div className="biography container">
            <div className="banner">
            <img src = {imageUrl} alt = "aboutImg"/>
            </div>
            <div className="banner">
                <p> Biography </p>
                <h3>Who we are</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam assumenda itaque commodi dolores ratione tenetur quidem voluptatum in reiciendis,
                    quasi saepe! Sunt fuga odio nemo, iste tenetur sit neque non ea. Ipsa, qui. Aliquam dignissimos explicabo porro quas sapiente sunt repudiandae debitis 
                    veritatis, animi deleniti, iure incidunt est minus.
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <p>
                    Lorem ipsum dolor sit amet.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim adipisci blanditiis molestiae cupiditate eum, distinctio voluptate nobis tempora fugit molestias, explicabo, deserunt dolorem ducimus quia nam. Nulla sit fugiat non quaerat itaque porro ipsa cupiditate.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facere?
                        </p>
                        <p>
                            Lorem, ipsum dolor.
                        </p>
                </div>
         
       </div>
       </>
    )
}
export default Biography;