import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Actions
import { setCurrentPage } from '../actions/page'

class Content extends Component {

    componentDidMount() {
        // this.props.setCurrentPage({
        //     title: 'AAAAAA'
        // })
    }
    

    render(){
        const { children, currentPage } = this.props;
        return (
            <div className="container">
                <h5>{ currentPage.title }</h5>
                <div className="page-container">
                    { children }
                </div>
            </div>
        );
    }
};

Content.propTypes = {
    currentPage: PropTypes.object,
    setCurrentPage: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        currentPage: state.page.current
    }
}

export default connect(mapStateToProps, { setCurrentPage })(Content);