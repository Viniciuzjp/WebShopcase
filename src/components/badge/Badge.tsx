'use client';

import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

interface CustomizedBadgesProps {
  cartValue: number;
}

export default function CustomizedBadges({ cartValue }: CustomizedBadgesProps) {
  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={cartValue}
    >
      <IconButton aria-label="cart">
        <ShoppingCartIcon />
      </IconButton>
    </StyledBadge>
  );
}