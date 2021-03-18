import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGames } from '../components/API/fetchGames'
import GamesList from '../components/API/GamesList'


class APIContainer extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.fetchGames()
    }
    render() {

        console.log(this.props.games)
        return (
            <div className="api-container">
                
                <GamesList games={this.props.games}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        games: state.games,
        loading: state.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchGames: () => dispatch(fetchGames())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(APIContainer);