# Podcast Consultant

A web application built with Vite and React for discovering top 100 podcasts. The application uses a Node.js server to fetch podcast details and avoid CORS restrictions.

## Features

- **Discover Podcasts**: Get a list of popular podcasts from different genres.
- **Search Functionality**: Filter podcasts based on specific terms to find the ones you are interested in.
- **Podcast Details**: Click on a podcast to view more in-depth details about it and play the most recent one.

## Prerequisites

- React
- Vite
- SASS
- Node.js
- Cypress

## Setup

### Installing Dependencies

npm install

### Running the Vite Development Server

npm run dev

### Running the Node.js Server

Navigate to the root directory of the project (../podcast-proxy/) and run:

node server.js

This starts the Node.js server on `http://localhost:5000`.

### Running Tests with Cypress

First, ensure you have installed all dependencies. To run tests in interactive mode:

npx cypress open

Or to run tests headlessly:

npx cypress run

## Project Structure

A brief overview of significant directories and files:

```
.
├── .eslintrc.cjs                  # ESLint configuration file for linting the code.
├── .gitignore                     # Specifies intentionally untracked files to ignore.
├── cypress.config.js              # Configuration file for Cypress e2e testing.
├── index.html                     # Main HTML file.
├── package-lock.json              # Locks the version of your npm packages.
├── package.json                   # Lists the packages your project depends on.
├── README.md                      # Project description and user guide.
├── vite.config.js                 # Vite configuration file.
│
├── cypress                        # Cypress testing tool related files.
│   ├── e2e                        # e2e test cases.
│   │   ├── MainView.cy.js
│   │   ├── PodcastDetails.cy.js
│   │   └── PodcastEpisodeDetails.cy.js
│   │
│   ├── fixtures                   # Test data for Cypress tests.
│   │   └── example.json
│   │
│   ├── plugins                    # Cypress plugins.
│   │   └── index.js
│   │
│   ├── screenshots                # Screenshots of failed tests, if any.
│   └── support                    # Reusable Cypress functions and hooks.
│       ├── commands.js
│       └── e2e.js
│
├── node_modules                   # Node.js modules installed for the project.
│
├── podcast-proxy                  # Node.js proxy server to bypass CORS.
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── node_modules
│
└── src                            # Main source code of the project.
    ├── App.jsx                    # Main App component.
    ├── main.jsx                   # Entry point of the React app.
    │
    ├── api                        # Contains API related functionalities.
    │   └── api.jsx
    │
    └── views                      # UI views of the project.
        ├── MainView
        │   ├── MainView.jsx       # Main view component.
        │   └── MainView.scss      # Styles for the Main view.
        │
        ├── PodcastDetails
        │   ├── PodcastDetails.jsx  # Details of each podcast.
        │   └── PodcastDetails.scss # Styles for the PodcastDetails.scss
        │
        └── PodcastEpisodeDetails
            ├── PodcastEpisodeDetails.jsx
            └── PodcastEpisodeDetails.scss # Styles for the PodcastEpisodeDetails.scss

```

## Contributing

Please feel free to submit pull requests or create issues to enhance the application or fix bugs.

## License

This project is open-source and available under the MIT License.

---
