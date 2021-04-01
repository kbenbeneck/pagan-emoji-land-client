import React, { Component } from 'react'
import { connect } from 'react-redux'

class SearchInput extends Component {
    state = {
        text: ''
    }
    handleOnSubmit = e => {
        e.preventDefault()
        this.props.searchElement(this.state.text)
    }

    handleOnChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (
            <form
                onSubmit={(e) => this.handleOnSubmit(e)}
            >
                
                <input
                    value={this.state.text}
                    type="text"
                    onChange={(e) => this.handleOnChange(e)}
                >
                </input>

                <input 
                    type="submit">
                </input>
                
                
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchElement: searchState => dispatch({
            type: 'SEARCH', payload: searchState
        })
    }
}

export default connect(null, mapDispatchToProps)(SearchInput)