/** @jsxRuntime classic */

/** @jsx jsx */
import type { AdminConfig } from '@keystone-6/core/types';
import { jsx } from '@keystone-ui/core';
import Link from 'next/link';

const CustomLogo = () => (
  <Link
    href="/"
    css={{
      // TODO: we don't have colors in our design-system for this.
      backgroundImage: `linear-gradient(to right, #0ea5e9, #6366f1)`,
      backgroundClip: 'text',
      lineHeight: '1.75rem',
      color: 'transparent',
      verticalAlign: 'middle',
      transition: 'color 0.3s ease',
      textDecoration: 'none',
    }}
  >
    <img src="/assets/logo/logo.png" height={40} width={120} />
  </Link>
);

export const components: AdminConfig['components'] = {
  // Navigation: CustomNavigation,
  Logo: CustomLogo,
};
