// react
import React from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppImageNew from '../shared/AppImageNew';  

import { Link } from "react-router-dom";
import AsyncAction from '../shared/AsyncAction'; 
import CurrencyFormat from '../shared/CurrencyFormat';
import Rating from '../shared/Rating';  
import {
    Cart20Svg,
    Compare16Svg,
    
    Wishlist16Svg,
} from '../../svg'; 

function ProductCard(props ) {
    const {
        product,
        layout,
        exclude = [],
        className,
        ...rootProps
    } = props;
    const intl = useIntl();
    const featuredAttributes = product.attributes.filter((x) => x.featured);
    const cartAddItem = ()=>{};
     const quickviewOpen = ()=>{};
      const compareAddItem = ()=>{};
      const wishlistAddItem = ()=>{};

    const showQuickview = () => quickviewOpen(product.slug);
    const addToWishlist = () => wishlistAddItem(product);
    const addToCompare = () => compareAddItem(product);

    const rootClasses = classNames('product-card', className, {
        [`product-card--layout--${layout}`]: layout,
    });

    return (
        <div className={rootClasses} {...rootProps}>
            <div className="product-card__actions-list">
               

                {!exclude.includes('actions') && (
                    <React.Fragment>
                        <AsyncAction
                            action={() => addToWishlist()}
                            render={({ run, loading }) => (
                                <button
                                    type="button"
                                    className={classNames('product-card__action product-card__action--wishlist', {
                                        'product-card__action--loading': loading,
                                    })}
                                    aria-label={intl.formatMessage({ id: 'BUTTON_ADD_TO_WISHLIST' })}
                                    onClick={run}
                                >
                                    <Wishlist16Svg />
                                </button>
                            )}
                        />
                        <AsyncAction
                            action={() => addToCompare()}
                            render={({ run, loading }) => (
                                <button
                                    type="button"
                                    className={classNames('product-card__action product-card__action--compare', {
                                        'product-card__action--loading': loading,
                                    })}
                                    aria-label={intl.formatMessage({ id: 'BUTTON_ADD_TO_COMPARE' })}
                                    onClick={run}
                                >
                                    <Compare16Svg />
                                </button>
                            )}
                        />
                    </React.Fragment>
                )}
            </div>

            <div className="product-card__image">
                <div className="image image--type--product">
                    <Link href="#" className="image__body">
                        {product.images && <AppImageNew className="image__tag" src={product.images[0]} />}

                    </Link>
                </div>

                 
            </div>

            <div className="product-card__info">
                {!exclude.includes('meta') && (
                    <div className="product-card__meta">
                        <span className="product-card__meta-title">
                            <FormattedMessage id="TEXT_SKU" />
                            {': '}
                        </span>
                        {product.sku}
                    </div>
                )}

                <div className="product-card__name">
                    {product.badges && product.badges.length > 0 && (
                        <div className="product-card__badges">
                            {product.badges.map((badge) => (
                                <div key={badge} className={`tag-badge tag-badge--${badge}`}>{badge}</div>
                            ))}
                        </div>
                    )}
                    <Link href="#" >{product.name}</Link>
                </div>

                <div className="product-card__rating">
                    <Rating className="product-card__rating-stars" value={product.rating || 0} />
                    <div className=" product-card__rating-label">
                        <FormattedMessage
                            id="TEXT_RATING_LABEL"
                            values={{
                                rating: product.rating,
                                reviews: product.reviews,
                            }}
                        />
                    </div>
                </div>

                {!exclude.includes('features') && featuredAttributes.length > 0 && (
                    <div className="product-card__features">
                        <ul>
                            {featuredAttributes.map((attribute, index) => (
                                <li key={index}>
                                    {attribute.name}
                                    {': '}
                                    {attribute.values.map((x) => x.name).join(', ')}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="product-card__footer">
                <div className="product-card__prices">
                    {product.compareAtPrice !== null && (
                        <React.Fragment>
                            <div className="product-card__price product-card__price--new">
                                <CurrencyFormat value={product.price} />
                            </div>
                            <div className="product-card__price product-card__price--old">
                                <CurrencyFormat value={product.compareAtPrice} />
                            </div>
                        </React.Fragment>
                    )}
                    {product.compareAtPrice === null && (
                        <div className="product-card__price product-card__price--current">
                            <CurrencyFormat value={product.price} />
                        </div>
                    )}
                </div>
                {!exclude.includes('buttons') && (
                    <React.Fragment>
                        <AsyncAction
                            action={() => cartAddItem(product)}
                            render={({ run, loading }) => (
                                <button
                                    type="button"
                                    className={classNames('product-card__addtocart-icon', {
                                        'product-card__addtocart-icon--loading': loading,
                                    })}
                                    aria-label={intl.formatMessage({ id: 'BUTTON_ADD_TO_CART' })}
                                    onClick={run}
                                >
                                    <Cart20Svg />
                                </button>
                            )}
                        />
                        {!exclude.includes('list-buttons') && (
                            <React.Fragment>
                                <AsyncAction
                                    action={() => cartAddItem(product)}
                                    render={({ run, loading }) => (
                                        <button
                                            type="button"
                                            className={classNames('product-card__addtocart-full', {
                                                'product-card__addtocart-full--loading': loading,
                                            })}
                                            onClick={run}
                                        >
                                            <FormattedMessage id="BUTTON_ADD_TO_CART" />
                                        </button>
                                    )}
                                />
                                <AsyncAction
                                    action={() => addToWishlist()}
                                    render={({ run, loading }) => (
                                        <button
                                            type="button"
                                            className={classNames('product-card__wishlist', {
                                                'product-card__wishlist--loading': loading,
                                            })}
                                            onClick={run}
                                        >
                                            <Wishlist16Svg />
                                            <span>
                                                <FormattedMessage id="BUTTON_ADD_TO_WISHLIST" />
                                            </span>
                                        </button>
                                    )}
                                />
                                <AsyncAction
                                    action={() => addToCompare()}
                                    render={({ run, loading }) => (
                                        <button
                                            type="button"
                                            className={classNames('product-card__compare', {
                                                'product-card__compare--loading': loading,
                                            })}
                                            onClick={run}
                                        >
                                            <Compare16Svg />
                                            <span>
                                                <FormattedMessage id="BUTTON_ADD_TO_COMPARE" />
                                            </span>
                                        </button>
                                    )}
                                />
                            </React.Fragment>
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    );
}

export default React.memo(ProductCard);
