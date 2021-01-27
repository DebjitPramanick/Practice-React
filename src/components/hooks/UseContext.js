import React, {useContext} from 'react'

import {Context} from "../../Routing"
import {AgeContext} from "../../Routing"

const UseContext = () => {

    const user = useContext(Context);
    const age = useContext(AgeContext);

    return (
        <div className="container">

            {/* This is a long method. */}

            {/* <Context.Consumer>
                {
                    user => (
                        <AgeContext.Consumer>
                            {
                                age => (
                                    <div>
                                        <p>User name - {user}</p>
                                        <p>User age - {age}</p>
                                    </div>
                                )
                            }
                        </AgeContext.Consumer>
                    )
                }
            </Context.Consumer> */}


            {/* This is using react hooks. */}
            {/* This is a single line to code to get the same output. */}

            {user} - {age}

        </div>
    )
}

export default UseContext
