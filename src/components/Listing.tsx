// import React from 'react';
import ProductCard from './ProductCard.tsx';
import type { ListingItem } from '../interfaces.ts';

interface ListingProps {
  items?: ListingItem[];
}

const Listing = ({ items = [] }: ListingProps) => {
  return (
    <div className="product-grid">
      {items.map((item) => (
        <ProductCard key={item.listing_id} item={item} />
      ))}
    </div>
  );
};
export default Listing;