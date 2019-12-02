import React, { Component } from 'react'
import {LoadingContainer} from "./style"
export default class Loading extends Component {
    render() {
        return (
            <LoadingContainer>
            <div className="showbox">
                <div className="loader">
                    <svg className="circular" viewBox="25 25 50 50">
                        <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                    </svg>
                </div>
            </div>
            </LoadingContainer>
        )
    }
}
