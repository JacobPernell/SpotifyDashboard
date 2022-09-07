# SpotifyDashboard
Dashboard to display stats from your Spotify account, inspired by Spotify Wrapped, as a project to practice full stack development and working with external APIs/SDKs.

## Brainstorm
### High-level technology learning goals
- Exposure with external APIs/SDKs (in this case, the [Spotify API](https://developer.spotify.com/)
- Front end dev practice with React
- Gain exposure building a backend with Python (FastAPI)
- Gain exposure with Jest (or similar testing framework)
- Gain exposure bundling with Webpack
- Work with Spotify's design system for a consistent experience between my app and Spotify

### MVP features
- Login/authenticate with Spotify account
- Display a dashboard with a few widgets that show: top 10 listened artists, top 10 listened songs, a chart of top 10 genres listened to
- Be able to adjust time range for whole dashboard to show information for the past: 7 days, 1 month, 6 months, 1 year

### Stretch goal feature ideas
- Add an "In case you missed it" widget to dashboard that randomly displays a song from user's previous week's Discover Weekly
- Be able to adjust time range for individual widgets instead of only per-page
- Add previous years to time range options (e.g. 2021, 2020, 2019...)
- Extend the dashboard functionality with multiple pages, including a new page for "Playlist Generator" and "Random Song"
- Playlist Generator page: select a genre (and possibly 3-5 relevant artists/songs) and the page generates a new 30-song playlist for you that you can add to your account
- Random Song: a random song is generated (algorithm for determining what kind of song is TBD), and be able to listen to the song with an audio player in the browser, as well as Like said song and save to your account
