import React, { Component } from 'react'
import className from 'classnames'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Actions
import { getContacts, getcontactDetail } from '../actions/contacts'

// Components
import Loader from '../components/helpers/Loader'

function mapStateToProps(state) {
    return {
        contacts: state.contacts.items,
        count: state.contacts.count,
        loading: state.contacts.fetching
    };
}

class Contacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        count: PropTypes.number.isRequired,
        loading: PropTypes.bool.isRequired,
        render: PropTypes.func,
    }

    componentWillMount(){
        this.props.getContacts()
    }

    render() {
        const { loading, contacts, count, render } = this.props;
        if(render){
            return render(this.props)
        }
        else{
            return (
                <div className={className({'contacts-list': true, 'loading': loading})}>
                    <Loader />
                    <h2>Total: {count}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th style={{width: '40px'}}>#</th>
                                <th style={{width: '180px'}}>Name</th>
                                <th style={{width: '220px'}}>Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map(
                                (contact, key) => <tr key={key} onClick={() => { getcontactDetail(contact.id) }}><td>{key+1}</td><td>{ contact.firstName } { contact.lastName }</td><td>{ contact.msisdn }</td></tr>
                            )} 
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default connect(
    mapStateToProps, {
        getcontactDetail,
        getContacts
    }
)(Contacts);