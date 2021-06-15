// react
import React, { useEffect, useRef } from 'react';
// third-party
import classNames from 'classnames';
// application  
//import { useMedia } from '../../store/hooks/hooks';
 

function BlockHeader(props ) {
    
    const { pageTitle, breadcrumb = [], afterHeader = true } = props;
    const hasPageTitle = !!pageTitle;
    const hasBreadcrumb = breadcrumb.length > 0;
    const elementRef = useRef (null);
    const titleElementRef = useRef (null);
    const titleVisible = true;
    //useMedia('(min-width: 1200px)');

    const calcTitleWidth = () => {
        // So that breadcrumbs correctly flow around the page title, we need to know its width.
        // This code simply conveys the width of the page title in CSS.

        if (!elementRef.current || !titleElementRef.current) {
            return;
        }

        const { width } = titleElementRef.current.getBoundingClientRect();

        elementRef.current.style.setProperty('--block-header-title-width', `${width}px`);
        elementRef.current.style.setProperty('padding', `0`);
        elementRef.current.style.setProperty('margin', `0`);
    };

    useEffect(() => {
        if (titleVisible) {
            calcTitleWidth();
        }
    }, [pageTitle, titleVisible]);

    const rootClasses = classNames('block-header', {
        'block-header--has-title': hasPageTitle,
        'block-header--has-breadcrumb': hasBreadcrumb,
    });

    return (
        <div className={rootClasses} ref={elementRef}>
            <div className="store_container">
                <div className="block-header__body">
                    
                    {hasPageTitle && <h1 className="block-header__title" ref={titleElementRef}>{pageTitle}</h1>}
                </div>
            </div>
        </div>
    );
}

export default BlockHeader;
