# What is it

It's a test task for Smart Recruiters. It's a media gallery arranged in a bento grid, where one of the assets is a video that opens in a modal.

I approached this task as if this gallery component was a part of a bigger whole - a web app - so I made it modular, able to be easily extended by adding more media and mocked receiving data from the backend or CMS.

Because I approached it as a part of a bigger picture, I defined styles for elements as if it was a style guide, using variables and CSS reset. Then I arranged the media in a bento layout, using grid and grid areas. If there were more elements, each new image is placed underneath the exisiting layout and spans the whole width of the container.

# Tech stack used

- Vite to scaffold the project
- SCSS (using variables and partials)
- TypeScript
- Vitest for unit tests
- Prettier and ESLint for formating and linting

# How to run it

## Locally

1. Make sure you have installed Node.js and Node version manager.
2. Run `nvm use` to use the right Node.js version (defined in `.nvmrc` file),
3. Run `npm install` to install dependencies,
4. Run `npm run dev` to start a local server.

## Live

Live version is deployed with Netlify and can be found here: https://smartrecruiters-task.netlify.app/

Project deploy status:

[![Netlify Status](https://api.netlify.com/api/v1/badges/788f5094-721c-4d0a-adc8-7fa9417e81b2/deploy-status)](https://app.netlify.com/projects/smartrecruiters-task/deploys)
