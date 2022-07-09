# Next.js with Keycloak Example App

<span>
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg" alt="typescript">
<img src="https://img.shields.io/badge/Node-18.12.1-339933.svg" alt="nodejs">
<img src="https://img.shields.io/badge/React-18.2.0-61DAFB.svg" alt="react">
<img src="https://img.shields.io/badge/Next-13.3.0-000000.svg" alt="nextjs" />
</span>

This is a simple project demonstrating how to integrate a Next.js app with [Keycloak](https://www.keycloak.org).

It uses Typescript, taking advantage of the typings provided by [next-auth](https://www.npmjs.com/package/next-auth) package.

## Getting Started

### Launch the Keycloak server

```
$ cd keycloak

$ docker-compose up -d
```

### Start the web client

```
$ yarn install

$ yarn dev
```