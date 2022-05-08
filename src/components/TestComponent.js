import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeState } from '../features/test'

const TestComponent = () => {

    const test = useSelector((state) => state.test);
    const dispatch = useDispatch();
    console.log(test)

    return(
        <React.Fragment>
            <div>{test.testState}</div>
            <button onClick={() => dispatch(changeState('updated string'))}> Change</button>
        </React.Fragment>

    ) 
}

export default TestComponent;