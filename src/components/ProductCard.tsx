// ProductCard.tsx
import React from 'react';
import type { ListingItem } from '../interfaces';

interface ProductCardProps {
  item: ListingItem;
}

const formatPrice = (price: string, currencyCode: string): string => {
  switch (currencyCode) {
    case 'USD':
      return `$${parseFloat(price).toFixed(2)}`;
    case 'EUR':
      return `€${parseFloat(price).toFixed(2)}`;
    case 'GBP':
      return `£${parseFloat(price).toFixed(2)}`;
    default:
      return `${currencyCode} ${parseFloat(price).toFixed(2)}`;
  }
};

const getStockBadgeClass = (quantity: number): string => {
  if (quantity < 10) return 'stock-low';
  if (quantity < 20) return 'stock-medium';
  return 'stock-high';
};

const truncateTitle = (title: string): string => {
  return title.length > 50 ? `${title.substring(0, 50)}…` : title;
};

const ProductCard= ({
  item
}: ProductCardProps) => {
  const { MainImage, title, currency_code, price, quantity } = item;

  return (
    <div className="product-card">
      <img
        src={MainImage.url_570xN}
        alt={truncateTitle(title)}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-title">{truncateTitle(title)}</h3>
        <div className="price-container">
          <div className="product-price">{formatPrice(price, currency_code)}</div>
          <span className={`stock-badge ${getStockBadgeClass(quantity)}`}>
            {quantity} left
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;