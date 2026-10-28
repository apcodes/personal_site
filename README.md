# anish parepalli — personal site

Live ASCII ocean behind a minimal page: sharks hunt schools of fish, your cursor scatters them, and clicks make splashes.

```bash
npm install
npm run dev   # http://localhost:3000
```

## Where things live

- `app/page.tsx`: home page. Edit `LINKS` and `FACTS` here.
- `app/projects/page.tsx`: projects page. Edit `PROJECTS` here.
- `app/globals.css`: all styling (plain CSS, no framework).
- `components/ocean-shell.tsx`: the ocean canvas, nav, and eaten-fish counter. Change the shark roster in `SHARKS`.
- `lib/ocean/`: the simulation and ASCII renderer, vendored from [stackedlol/ascii-sharks](https://github.com/stackedlol/ascii-sharks) (MIT, see `lib/ocean/LICENSE`) with a small `onEat` hook added.
- `public/Anish_Parepalli_Resume.pdf`: resume served at `/Anish_Parepalli_Resume.pdf`.

## Credits

Design inspired by [daoho.dev](https://www.daoho.dev/) and [jwahn.com](https://jwahn.com/). Ocean from [stackedlol/ascii-sharks](https://github.com/stackedlol/ascii-sharks).
