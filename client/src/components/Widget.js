import React from 'react';
import PropTypes from 'prop-types'
import className from 'classnames'

// Components
import Loader from './helpers/Loader'

const Widget = props => {
    let Icon;
    if(props.icon){
        Icon = require('react-icons/fi')['Fi'+props.icon];
    }
    
    const styles = {
        widget: Object.assign(props.style || {}, {
            boxShadow: `0px 4px 0px ${props.color ? props.color : '#ccc'}`
        })
    }

    return (
        <div className={className({'widget': true, 'loading': props.loading, [props.className]: true})} style={ styles.widget }>
            <Loader />
            { (Icon || props.title) &&
                <h5>
                    { Icon && <Icon size="28" color="#ccc" /> }
                    { props.title }
                </h5>
            }
            <div className="widget-content">
                { props.render() }
            </div>
        </div>
    );
};

Widget.propTypes = {
    render: PropTypes.func.isRequired
}

export default Widget;