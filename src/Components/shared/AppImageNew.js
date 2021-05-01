// react
import React, { useMemo } from 'react';
 
const AppImageNew = React.forwardRef((props , ref ) => {
    const { src, ...otherProps } = props;

 
    return <img alt="" {...otherProps} src={src} ref={ref} />;
     


});

export default AppImageNew;
