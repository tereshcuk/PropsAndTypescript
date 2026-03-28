// App.tsx
import React from 'react';
import Listing from './components/Listing';
import data from './data/etsy.json';
import type { ListingItem } from './interfaces.ts';


function validateListingItems(data: any[]): ListingItem[] {
  return data.filter((item): item is ListingItem => {
    return (
      typeof item.listing_id === 'number' &&
      typeof item.title === 'string' &&
      typeof item.currency_code === 'string' &&
      typeof item.price === 'string' &&
      typeof item.quantity === 'number'
    );
  });
}


const App: React.FunctionComponent = () => {
  return (
    <div className="container">
      <h1>Список предложений</h1>      
      <Listing items={validateListingItems(data)} />
    </div>
  );
};

export default App;