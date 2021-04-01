import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGames } from '../actions/fetchGames'
import GamesList from '../components/API/GamesList'
import SearchInput from '../components/search/SearchInput'




class APIContainer extends Component {
    componentDidMount() {
        console.log(this.props)
        console.log('a')
        this.props.fetchGames()
        console.log('g')
    }
    
    render() {

        console.log(this.props.games)
        return (
            <div className="api-container">
                <SearchInput></SearchInput>
                
                <GamesList games={this.props.searchResults}
                    searchResults={this.props.searchResults}
                />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        games: state.games,
        searchResults: state.searchResults,
        loading: state.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchGames: () => dispatch(fetchGames())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(APIContainer);