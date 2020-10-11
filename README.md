# TelloDrone

![](https://i.imgur.com/MhLB70m.png)
This project was generated using [Nx](https://nx.dev).

## Refs

- https://github.com/agborkowski/nestjs-sample-udp-server
- https://github.com/wesbos/javascript-drones
- https://github.com/AlexanderGranhof/tello-drone

#### dgram

- https://www.itread01.com/content/1547298606.html
- https://node.readthedocs.io/en/latest/api/dgram/
- https://github.com/dex4er/js-dgram-as-promised
- https://docs.nestjs.com/websockets/gateways

#### websocket

- https://gabrieltanner.org/blog/nestjs-realtime-chat

## Video Stream

```
brew install ffmpeg
```

ffplay:

```
ffplay -f h264 -i udp://192.168.10.1:11111
```

## Dev

### Generate Backend `nest.js`

```
npm install --save-dev @nrwl/nest
nx g @nrwl/nest:app backend
```

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@tello-drone/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
