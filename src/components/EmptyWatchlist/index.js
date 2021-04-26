import React from 'react';
import {
  Star,
  Wrapper,
  Heading
} from './EmptyWatchlistElements';

export default function EmptyWatchlist(props) { 
  return (
    <Wrapper>
      <Star size="50" />
      <Heading>No starred coins at the moment.</Heading>
    </Wrapper>
  );
}