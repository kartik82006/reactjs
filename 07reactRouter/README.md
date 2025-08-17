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
