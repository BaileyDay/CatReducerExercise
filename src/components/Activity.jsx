import React from "react";
import {connect} from "react-redux";
import { eat, nap, play } from "../redux/actions"

const Activity = ({ activity, eat, nap, play }) => (
    <>
    <h1>What is the cat doing?</h1>
        <p> The cat is {activity}</p>
    <button onClick={() => eat()}>Eating</button>
        <button onClick={() => nap()}>Napping</button>
        <button onClick={() => play()}>Playing</button>
    </>
)

const mapStateToProps = state => {
    const {activity} = state;
    return activity;
}

export default connect(
    mapStateToProps,
    { eat, nap, play }
    )(Activity);