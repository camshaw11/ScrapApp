import React from "react"
import { connect } from "react-redux";
import { applyFilter } from "../actions/filter"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite, faCouch, faTshirt, faArchive } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
    render() {
        const { auth } = this.props

        return (
            <>
                <nav className="navbar is-fixed-bottom nav-footer" role="navigation">
                    <FontAwesomeIcon onClick={() => this.props.dispatch(applyFilter("Food"))} icon={faDrumstickBite} size="2x" className="nav-icon food-icon" />
                    <FontAwesomeIcon onClick={() => this.props.dispatch(applyFilter("Furniture"))} icon={faCouch} size="2x" className="nav-icon furniture-icon" />
                    <FontAwesomeIcon onClick={() => this.props.dispatch(applyFilter("Clothes"))} icon={faTshirt} size="2x" className="nav-icon clothes-icon" />
                    <FontAwesomeIcon onClick={() => this.props.dispatch(applyFilter("Stuff"))} icon={faArchive} size="2x" className="nav-icon stuff-icon" />
                </nav>
            </>
        )
    }
}

const mapStateToProps = ({ filter }) => {
    
    return { filter }
}

export default connect(mapStateToProps)(Footer)