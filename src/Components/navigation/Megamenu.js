// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
//import AppImage from '~/components/shared/AppImage';
import MegamenuLinks from './MegamenuLinks';
 

function Megamenu(props) {
    const {
        menu,
        onItemClick,
        className,
        ...rootProps
    } = props;
    const hasImage = !!menu.image;

    const rootClasses = classNames('megamenu', className);

    return (
        <div className={rootClasses} {...rootProps}>
            {/* {hasImage && (
                <div className="megamenu__image">
                    <AppImage className="reflect-rtl" src={menu.image} />
                </div>
            )} */}
            <div className="row">
                {menu.columns.map((column, columnIndex) => {
                    const columnClasses = classNames(`col-${column.size}`);
                    const hasLinks = column.links?.length > 0;

                    return (
                        <div className={columnClasses} key={columnIndex}>
                            {hasLinks && (
                                <MegamenuLinks
                                    className="megamenu__links"
                                    links={column.links}
                                    onItemClick={onItemClick}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Megamenu;
