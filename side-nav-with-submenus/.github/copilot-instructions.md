# Copilot Instructions for Side Nav with Submenus

## Architecture Overview

This is a Next.js 13+ App Router project demonstrating a responsive navigation system with collapsible submenus. The core architecture follows a **layout wrapper pattern** where components are composed to handle responsive behavior and consistent spacing.

### Key Layout Components

- **`SideNav`**: Desktop-only fixed sidebar (hidden on mobile via `hidden md:flex`)
- **`HeaderMobile`**: Mobile-only navigation using Framer Motion animations with circular reveal
- **`MarginWidthWrapper`**: Provides `md:ml-60` offset to account for fixed 240px sidebar width
- **`PageWrapper`**: Adds consistent padding and background styling to page content

### Navigation Data Structure

Navigation is **centrally configured** in `src/constants.tsx` using the `SIDENAV_ITEMS` array:

```tsx
{
  title: 'Projects',
  path: '/projects',
  icon: <Icon icon="lucide:folder" />,
  submenu: true,
  subMenuItems: [
    { title: 'Web Design', path: '/projects/web-design' }
  ]
}
```

## Development Patterns

### Responsive Strategy
- **Desktop**: Fixed sidebar with `md:w-60` (240px) + margin offset on main content
- **Mobile**: Hidden sidebar + animated mobile menu using Framer Motion's `useCycle`
- **Both versions** render the same navigation data but with different UX patterns

### State Management
- Local state only using React `useState`
- Navigation open/close state managed per-component (desktop vs mobile)
- Active page detection via `usePathname()` for styling current routes

### Styling Conventions
- Uses **Tailwind CSS** with zinc color palette (`bg-zinc-100`, `border-zinc-200`)
- Custom utility in `lib/utils.tsx`: `cn()` function merges Tailwind classes via `clsx` + `tailwind-merge`
- Hover states: `hover:bg-zinc-100`
- Active states: Conditional classes based on pathname matching

### Icon System
Uses `@iconify/react` with Lucide icon set: `<Icon icon="lucide:home" width="24" height="24" />`

## Development Workflow

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format code with Prettier
```

## File Naming & Structure

- **Pages**: `src/app/*/page.tsx` (App Router convention)
- **Components**: kebab-case filenames (`header-mobile.tsx`)
- **Types**: Centralized in `src/types.tsx`
- **Constants**: Navigation and app-wide constants in `src/constants.tsx`

## Adding New Routes

1. Create page file: `src/app/new-route/page.tsx`
2. Add to navigation: Update `SIDENAV_ITEMS` in `src/constants.tsx`
3. For submenus: Set `submenu: true` and populate `subMenuItems` array

The navigation system automatically handles active states and mobile responsiveness.

## Key Dependencies

- **Framer Motion**: For mobile menu animations (`motion`, `useCycle`)
- **Iconify**: Icon system with Lucide icon set
- **Next.js 13+**: App Router with `usePathname` for client-side routing