// react
import React from 'react';
// third-party
import classNames from 'classnames';

  
function BlockSpace(props) {
    const { layout, className, ...rootProps } = props;
    const rootClasses = classNames('block-space', `block-space--layout--${layout}`, className);

    return (
        <div className={rootClasses} {...rootProps} />
    );
}

export default React.memo(BlockSpace);
