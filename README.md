# Skanea Chrome Extension Frontend

This project contains the React-based popup for the Skanea Chrome extension. The popup provides:

- A chat interface where users can interact with Skanea
- A history panel on the left to browse previous conversations
- A settings overlay accessible from the gear icon in the top bar

The project is built with [Vite](https://vitejs.dev/) and uses ESLint for linting.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

To lint the code and create a production build:

```bash
npm run lint
npm run build
```

The resulting extension files are output to the `dist/` directory.
