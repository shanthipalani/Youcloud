// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
 
import { Link, useHistory } from "react-router-dom";

function MegamenuLinks(props ) {
    const {
        links,
        level = 0,
        onItemClick,
        className,
        ...rootProps
    } = props;

    const rootClasses = classNames('megamenu-links', className, {
        'megamenu-links--root': level === 0,
    });

    return (
        <ul className={rootClasses} {...rootProps}>
            {links.map((link, linkIndex) => {
                const subLinks = link.links || [];
                const hasSubLinks = subLinks.length > 0;
                const linkClasses = classNames('megamenu-links__item', {
                    'megamenu-links__item--has-submenu': link.links,
                });

                return (
                    <li className={linkClasses} key={linkIndex}>
                        <Link
                            className="megamenu-links__item-link"
                            href={link.url}
                            onClick={() => onItemClick && onItemClick(link)}
                            {...link.customFields?.anchorProps}
                        >
                            {link.title}
                        </Link>
                        {hasSubLinks && (
                            <MegamenuLinks links={subLinks} onItemClick={onItemClick} level={level + 1} />
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

export default React.memo(MegamenuLinks);
