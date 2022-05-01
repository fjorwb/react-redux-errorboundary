import React, { Component } from 'react';

export class Errorboundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
    }

    static getDerivedStateFromError(error) {
        return {message: error.message}
    }

    componentDidCatch(error) {
        if(this.props.onError) {
            this.props.onError(error)
        }
    }

    handleRetry () {
        this.setState('')
    }

    render() {
        if(this.setState.message) {
            return(
                <div>
                    <div>
                        {this.state.message}
                    </div>
                    <button onClick={this.handleRetry}>
                        Try again
                    </button>
                </div>
            )
        }
        return this.props.children
    }
}
