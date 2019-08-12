import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HomePage extends Component {
    onClickConsole() {
        console.log('Something');
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <p>Home Page content</p>
                <button onClick={() => this.onClickConsole()}>Console something</button>
            </div>
        )
    }
}

export default HomePage;