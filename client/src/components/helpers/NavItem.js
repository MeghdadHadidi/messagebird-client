import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

class NavItem extends Component {

    render() {
        const {to,exact, strict, activeClassName, className, activeStyle, style, isActive: getIsActive, render, ...rest } = this.props;
        return (
            <Route
                path={typeof to === 'object' ? to.pathname : to}
                exact={exact}
                strict={strict}
                children={({ location, match }) => {
                    const isActive = !!(getIsActive ? getIsActive(match, location) : match)

                    return (
                        <li 
                            className={isActive ? [activeClassName, className].join(' ') : className}
                            style={isActive ? { ...style, ...activeStyle } : style}>
                            <Link to={to} {...rest} />
                            { render && render() }
                        </li>
                    )
                }}
            />
        );
    }
}

export default NavItem;