import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
    children, onClick, className, disabled, active, ...attributes
}) => {

    const classes = classNames(
        'btn',
        className,
        { active }
    );
    console.log(attributes)
    return (
        <button
            {...attributes}
            className={classes}
            disabled={disabled}
            onClick={onClick}
        >{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
};

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    className: '',
    disabled: false,
    active: false,
}

export default Button;