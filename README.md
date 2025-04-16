# CCBus - Caribbean Coast Shuttle Bus Timetables

CCBus is a web application that provides shuttle bus timetables for the Caribbean Coast community. Built with Vue 3, TypeScript, and Vite, this project aims to deliver a user-friendly interface for accessing bus schedules.

## Features

- **Real-time Countdown**: Displays the time left for the next bus arrival.
- **Dynamic Timetables**: Automatically adjusts based on weekdays, weekends, and public holidays.
- **Social Sharing**: Share the app link via Twitter, Facebook, WhatsApp, and Messenger.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Storybook Integration**: Component-driven development with Storybook.

## Tech Stack

- **Frontend**: Vue 3, TypeScript, TailwindCSS
- **Build Tool**: Vite
- **Testing**: Vitest, Vue Test Utils
- **Storybook**: For UI component documentation and testing
- **CI/CD**: GitHub Actions for automated testing

## Getting Started

### Prerequisites

- Node.js (v20.x or higher)
- npm (v7.x or higher)

### Installation

1.  Clone the repository:

    git clone https://github.com/PierreDaily/ccbus.git

    cd ccbus

2.  Install dependencies

        npm install

### Development

Start the development server:

    npm run dev

The app will be available at http://localhost:5173

Build

    To build the project for production:

    npm run build

### Testing

Run unit tests:

    npm run test

Generate test coverage:

    npm run coverage

### Storybook

Start Storybook for component development:

    npm run storybook

Build Storybook:

    npm run build-storybook

### Environment Variables

The following environment variables are required:

    VITE_CONTACT_EMAIL : Contact email address for the app.
    VITE_GOOGLE_ANALYTICS_ID : Google Analytics tracking ID (optional).
