// react
import React, { useCallback, useRef, useState } from 'react';
// third-party
import classNames from 'classnames';
// application 
import { Link, useHistory } from "react-router-dom";

 import Megamenu from './Megamenu';
  
 import { ArrowRoundedDown9x6Svg,Menu16x12Svg ,  ArrowRoundedRight7x11Svg   } from '../../svg'; 
//import { useGlobalMousedown } from '~/services/hooks';
// data
import dataHeaderDepartments from './hearedata';
 

function Category(props ) {
    const { label } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const rootRef = useRef(null);

    const handleButtonClick = () => {
        setIsOpen((state) => !state);
    };

    const handleBodyMouseLeave = () => {
        setCurrentItem(null);
    };

    const handleListPaddingMouseEnter = () => {
        setCurrentItem(null);
    };

    const handleItemMouseEnter = (item ) => {
        setCurrentItem(item);
    };

    const handleItemClick = useCallback(() => {
        setIsOpen(false);
        setCurrentItem(null);
    }, [setIsOpen, setCurrentItem]);

    // useGlobalMousedown((event) => {
    //     if (rootRef.current && !rootRef.current.contains(event.target )) {
    //         setIsOpen(false);
    //     }
    // }, [setIsOpen, rootRef]);

    const classes = classNames('departments', {
        'departments--open': isOpen,
    });

    return (
        <div className={classes} ref={rootRef}>
            <div className="category-button d-flex justify-content-start align-items-center" type="div" onClick={handleButtonClick}>
            <span className="p-3 pl-md-4 m-0" style={{fill: "white"}}>
                     {/* <Menu16x12Svg />     */}
                     <img className="ml-2" src={require(`../../Asset/images/ham.png`).default}  style={{height: 18}} />
                
                </span> <span className="d-none d-md-block">All Categories</span>
                {/* <span className="departments__button-icon">
                     <Menu16x12Svg />    
                
                </span>
                <span className="departments__button-title">
                    {label}
                </span>
                <span className="departments__button-arrow">
                     <ArrowRoundedDown9x6Svg /> 
                   
                </span> */}
            </div>
            <div className="departments__menu">
                <div className="departments__arrow" />
                <div className="departments__body" onMouseLeave={handleBodyMouseLeave}>
                    <ul className="departments__list">
                        <li
                            className="departments__list-padding"
                            role="presentation"
                            onMouseEnter={handleListPaddingMouseEnter}
                        />
                        {dataHeaderDepartments.map((item, index) => {
                            const itemHasSubmenu = !!item.submenu;
                            const itemClasses = classNames('departments__item', {
                                'departments__item--has-submenu': itemHasSubmenu,
                                'departments__item--submenu--megamenu': item.submenu?.type === 'megamenu',
                                'departments__item--hover': item === currentItem,
                            });

                            return (
                                <li
                                    className={itemClasses}
                                    key={index}
                                    onMouseEnter={() => handleItemMouseEnter(item)}
                                >
                                    <Link
                                        className="departments__item-link"
                                        href={item.url}
                                        onClick={() => handleItemClick()}
                                        {...item.customFields?.anchorProps}
                                    >
                                        {item.title}
                                        {itemHasSubmenu && (
                                            <span className="departments__item-arrow">
                                                <ArrowRoundedRight7x11Svg />  
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                        <li
                            className="departments__list-padding"
                            role="presentation"
                            onMouseEnter={handleListPaddingMouseEnter}
                        />
                    </ul>

                    <div className="departments__menu-container">
                        {dataHeaderDepartments.map((item, index) => {
                            if (!item.submenu) {
                                return null;
                            }

                            const itemClasses = classNames(
                                'departments__megamenu',
                                `departments__megamenu--size--${item.submenu.size}`,
                                {
                                    'departments__megamenu--open': item === currentItem,
                                },
                            );
                           
                            return (
                                <Megamenu
                                    className={itemClasses}
                                    menu={item.submenu}
                                    key={index}
                                    onItemClick={handleItemClick}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Category);
