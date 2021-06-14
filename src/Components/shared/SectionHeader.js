// react
import React from 'react';
// third-party
// import classNames from 'classnames';
// application 

import { Link } from "react-router-dom";
import Arrow from './Arrow'; 

 

function SectionHeader (props ) {
    const {
        sectionTitle,
        arrows = false,
        groups = [],
        links = [],
        // currentGroup,
        onNext,
        onPrev,
        // onChangeGroup,
    } = props;

    return (
        <div className="section-header">
            <div className="section-header__body">
                {sectionTitle && (
                    <h2 className="section-header__title">{sectionTitle}</h2>
                )}

                <div className="section-header__spring" />

                {groups.length === 0 && links.length > 0 && (
                    <ul className="section-header__links">
                        {links.map((link, index) => (
                            <li key={index} className="section-header__links-item">
                                <Link href={link.url} className="section-header__links-link">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

                {groups.length > 0 && (
                    <ul className="section-header__groups">
                        {groups.map((group, index) => (
                            <li key={index} className="section-header__groups-item">
                                {/* <button
                                    type="button"
                                    className={classNames('section-header__groups-button', {
                                        'section-header__groups-button--active': group === currentGroup,
                                    })}
                                    onClick={() => onChangeGroup && onChangeGroup(group)}
                                >
                                    {group.name}
                                </button> */}
                            </li>
                        ))}
                    </ul>
                )}

                {arrows && (
                    <div className="section-header__arrows">
                        <Arrow
                            className="section-header__arrow section-header__arrow--prev"
                            direction="prev"
                            onClick={onPrev}
                        />
                        <Arrow
                            className="section-header__arrow section-header__arrow--next"
                            direction="next"
                            onClick={onNext}
                        />
                    </div>
                )}
                <div className="section-header__divider" />
            </div>
        </div>
    );
}

export default SectionHeader;
