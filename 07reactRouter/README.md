## React Router: Link and NavLink

### What I Learned

- `Link` enables client-side navigation without page reloads.
    ```jsx
    <Link to="/about">About</Link>
    ```
- `NavLink` works like `Link` but adds styling for the active route.
    ```jsx
    <NavLink to="/about" activeClassName="active">About</NavLink>
    ```
- Both are imported from `react-router-dom`.
- Use them inside a `<BrowserRouter>` for routing.
- Learned how to set up routes for a production-level project using nested routes for better structure and scalability.
- Discovered that the `<Outlet />` component renders child routes, allowing shared layout components like headers and footers to remain visible while only the main content changes.
    ```jsx
    <Header />
    <Outlet />
    <Footer />
    ```
- This approach keeps navigation and layout consistent across different pages.