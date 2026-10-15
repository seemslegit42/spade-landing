# Best Practices — The Spade Sentry

## Architecture & Code Standards
1. **Typography**: Always use `Comfortaa` for all titles and headers (`h1`-`h6`, `.font-heading`). Always use `Lexend Deca` for all body text.
2. **Icons**: Exclusively use Tabler Icons (`@tabler/icons-react`). No other icon libraries allowed.
3. **Design System**: Verdigris Interface Protocol (Roman Glassmorphism, Gunmetal Black canvas `#0D0E12`, Imperial Purple accents `#6A0DAD`, Roman Aqua `#20B2AA`, Patina Green `#3EB991`).
4. **Naming Conventions**: Strict kebab-case for file names and CSS utility conventions.
5. **Simulated Audio & Telephony**: Audio synthesis with Web Audio API (or smooth fallback sound effects) so users can audition the Snark Dial, Sona vs Spade comparisons, and Gauntlet phone calls directly in browser without broken external media files.
6. **No Spurious Micro-apps**: Keep codebase hyper-modular, flat, and maintainable.
