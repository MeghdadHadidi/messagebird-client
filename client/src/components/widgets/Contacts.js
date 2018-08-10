import React, { Component } from 'react'
import className from 'classnames'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Components
import Widget from '../Widget'
import Contacts from '../Contacts'

class ContactsWidget extends Component {
    
    render() {
        const { contactsCount, loading } = this.props;
        return (
            <Widget style={{width: '300px' }} className="contacts-widget" icon="Contacts" loading={loading} title="Contacts" color="#666" render={
                () => {
                    return(
                        <React.Fragment>
                            <div className={className({"account-overview": true, "contacts": true})} >
                                <strong>{ contactsCount }</strong>
                            </div>
                            <div className="contacts-widget-list">
                                <Contacts render={ props => {
                                    const { contacts } = props;
                                    return(
                                        <ul>
                                            { contacts.map((contact, key) => {
                                                return <li key={key}>
                                                    {contact.firstName} {contact.lastName} 
                                                    <span>{contact.msisdn}</span>
                                                </li>
                                            }) }
                                        </ul>
                                    )
                                }} />
                            </div>
                            <div className="widget-footer">
                                <Link className="button" to="/contacts">More</Link>
                            </div>
                        </React.Fragment>
                    )
                }
            } />
        )
    }
}

ContactsWidget.propTypes = {
    loading: PropTypes.bool.isRequired,
    contactsCount: PropTypes.number.isRequired
}

function mapStateToProps(state){
    return {
        loading: state.contacts.fetching,
        errors: state.contacts.error,
        contactsCount: state.contacts.count
    }
}

export default connect(mapStateToProps, {})(ContactsWidget)