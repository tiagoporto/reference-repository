# Reference Repository ![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg)

<p align="right">
  <code>LIKED ? <a href="https://github.com/tiagoporto/reference-repository/stargazers">⭐</a> : <a href="https://github.com/tiagoporto/reference-repository/issues">😞</a></code>
</p>

[![Release](https://img.shields.io/npm/v/reference-repository.svg?style=flat-square&label=release)](https://github.com/tiagoporto/reference-repository/releases)
[![Versions changelog](https://img.shields.io/badge/-changelog-grey.svg?style=flat-square)](https://github.com/tiagoporto/reference-repository/releases)

[![Node][badge-node-version]](https://www.npmjs.com/package/reference-repository)
[![Downloads][badge-downloads]](https://www.npmjs.com/package/reference-repository)
[![install size](https://packagephobia.now.sh/badge?p=reference-repository)](https://packagephobia.now.sh/result?p=reference-repository)

![Web Component][badge-web-component]
![type definitions][badge-definitions]
[![js-standard-style][badge-code-style]](http://standardjs.com)

[![License][badge-license]](https://raw.githubusercontent.com/tiagoporto/reference-repository/main/LICENSE)

[![Build Status][badge-build]](https://travis-ci.com/tiagoporto/reference-repository)
[![Coverage Status][badge-coverage]](https://coveralls.io/github/tiagoporto/reference-repository)
[![Mutation testing cover](https://img.shields.io/endpoint?url=https://badge-api.stryker-mutator.io/github.com/tiagoporto/reference-repository/main)](https://dashboard.stryker-mutator.io/reports/github.com/tiagoporto/reference-repository/main)
[![Dependencies Status][badge-dependencies]](https://david-dm.org/tiagoporto/reference-repository)
[![devDependencies Status][badge-dev-dependencies]](https://david-dm.org/tiagoporto/reference-repository?type=dev)
![Website](https://img.shields.io/website/https/tiagoporto.github.io/reference-repository.svg?style=flat-square)
[![Website](https://img.shields.io/endpoint?url=https://badge-api.stryker-mutator.io/github.com/tiagoporto/reference-repository/main)](https://dashboard.stryker-mutator.io/reports/github.com/tiagoporto/reference-repository/main)

<!--
Badges image
-->

[badge-inch]: http://inch-ci.org/github/tiagoporto/reference-repository.svg?branch=main&style=flat-square
[badge-dependencies]: https://img.shields.io/david/tiagoporto/reference-repository.svg?style=flat-square
[badge-dev-dependencies]: https://img.shields.io/david/dev/tiagoporto/reference-repository.svg?style=flat-square
[badge-coverage]: https://img.shields.io/coveralls/tiagoporto/reference-repository.svg?style=flat-square
[badge-build]: https://img.shields.io/travis/com/tiagoporto/reference-repository/main.svg?label=checks&logo=travis&style=flat-square
[badge-license]: https://img.shields.io/github/license/tiagoporto/reference-repository.svg?style=flat-square
[badge-code-style]: https://img.shields.io/badge/code%20style-standard-yellow.svg?style=flat-square
[badge-downloads]: https://img.shields.io/npm/dt/reference-repository.svg?style=flat-square
[badge-definitions]: https://img.shields.io/npm/types/reference-repository.svg?style=flat-square
[badge-node-version]: https://img.shields.io/node/v/reference-repository.svg?style=flat-square
[badge-web-component]: https://img.shields.io/badge/%20-Web%20Components-gray.svg?style=popout-square&logoColor=white&logoWidth=45&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDkuMTI2IDE2NS4xOTEiIG92ZXJmbG93PSJ2aXNpYmxlIj48cGF0aCBmaWxsPSIjRTQ0RDI2IiBkPSJNODUuMDAzIDE2NC41NjNsLTQ3LjM5MS0xMjkuNjU5IDEzMC4xNDUtMzQuODEzIDIzLjY3NCAxMzUuOTk0LTQ5LjM0NCAyOS4wMTZ6Ii8+PHBhdGggZmlsbD0iI0YxNjUyOSIgZD0iTTEzOS4xNDQgMTUzLjc5NmwzOS44NjctMjMuNDU3LTIwLjIzNi0xMTYuMjE2LTUzLjE4OSAxNC4yMjl6Ii8+PHBhdGggZmlsbD0iI0VGRUZFRiIgZD0iTTIyOS42NTQgNjcuMTdsNi4wNjQgMjAuODY0LTQ2LjQyNCAxMy4xMTdzMCAyNy45MjItMjIuNTI5IDM5LjAyMmMtMjIuNTI3IDExLjEwMS00MC4wMjcgMS42ODgtNDAuMDI3IDEuNjg4bC0yLjgwMi04LjA3NCAzMy40MTctOS4wODYgNy4zOTYtMjguNi0yMS41MjktMjEuMTc2LTMwLjk0OCA5LjM2LTIuNjg3LTcuMzQ1czE0LjQ2LTMxLjk1OSA1Ny4xODYtMTMuNzgyYzAgMCAxMy40NjMgOC40MDEgMTYuNDgyIDE1LjgxbDQ2LjQwMS0xMS43OTh6TTIzNS43MTggNjUuNjAzbDcuMzk3LTIuMTMxIDUuOTUxIDIxLjMwNi03Ljc0MiAyLjM0OHoiLz48cGF0aCBmaWxsPSIjQkNCQ0JDIiBkPSJNMjM4LjMyNCA2NC42NjJsNC43OTEtMS4xOSA1Ljk1MSAyMS4zMDYtNy43NDIgMi4zNDgtMi4wMjgtNy4xMzQgMy4wOS0xLjIwOXpNMjI0LjUzNSA2OC40NzVsNS4xMTktMS4zMDUgNi4wNjQgMjAuODY0LTQ2LjQyNCAxMy4xMTdzLS41IDI0LjM2My0xNi42NTYgMzUuMzk1Yy0xNi4xMjkgMTEuMDIzLTM0LjMwNyAxMC42OTEtNDUuOTA2IDUuMzE2bC0xLjI5My0zLjcyM3MzMS41NjggNy40MjIgNDcuMTk5LTE2LjI5N2M5LjQyNi0xNS42MzcgOS4yNi0yNi45MTEgOS4yNi0yNi45MTFsNDYuNTg0LTEyLjYxMS0zLjk0Ny0xMy44NDV6TTEwOS41NzkgNzYuOTI3bDI3LjI0OS03LjkwOCA2LjM4IDUuODkzLTMwLjk0MiA5LjM2eiIvPjxwYXRoIGZpbGw9IiNFRkVGRUYiIGQ9Ik0xMy41MTYgOTEuNzE0bDUuNDcgMjEuMDI0IDQ2LjU4Ni0xMi40NzdzMTQuMjk0IDIzLjk4IDM5LjMzNiAyMS45ODNjMjUuMDQ5LTEuOTk2IDM1LjI1NC0xOS4wMzQgMzUuMjU0LTE5LjAzNGwtMS43MjctOC4zNjgtMzMuMzU0IDkuMjk2LTIwLjk5My0yMC43NzQgNy42NTgtMjkuMjI4IDMxLjM4NC03Ljc5My0xLjQ1My03LjY5cy0yOC43NzItMjAuMDU5LTU2LjE4OCAxNy40MTZjMCAwLTcuMjU2IDE0LjEwMi02LjA3MiAyMi4wMWwtNDUuOTAxIDEzLjYzNXpNNy41MDggOTMuNDc0bC03LjQ0OCAxLjk1MSA1Ljc5MSAyMS4zNDQgNy44NTctMS45Mzl6Ii8+PHBhdGggZmlsbD0iI0JDQkNCQyIgZD0iTTQuNzg5IDkzLjk5MWwtNC43MjkgMS40MzQgNS43OTEgMjEuMzQ0IDcuODU3LTEuOTM5LTEuOTAxLTcuMTczLTMuMjg4LjU0NXpNMTguNTk2IDkwLjIxNmwtNS4wOCAxLjQ5OCA1LjQ3IDIxLjAyNCA0Ni41ODYtMTIuNDc3czEyLjkwNSAyMC42NjYgMzIuNDI2IDIxLjg4MmMxOS41MDIgMS4yMDMgMzQuOTQxLTguMzY5IDQyLjE2NC0xOC45MzNsLS43ODctMy44NThzLTIzLjMzNCAyMi41MzUtNDguOTA3IDEwLjE1NGMtMTYuMDk4LTguNjExLTIxLjcxNi0xOC4zOTUtMjEuNzE2LTE4LjM5NWwtNDYuNDgzIDEzLjAxNC0zLjY3My0xMy45MDl6TTEyMS42NzcgMzguNjZsLTI3LjQ0OCA3LjE0LTIuNDc2IDguMzM3IDMxLjM4My03Ljc5M3oiLz48L3N2Zz4K

> Project description.

The tool can be accessed on [tiagoporto.github.io/reference-repository](http://tiagoporto.github.io/reference-repository).

_Read this in other languages: English, [Português(Brasil)](README.md)_

_Work in Progress_

## Installation

```bash
npm i reference-repository
```

## Usage

## Contributing

[How to contribute](https://github.com/tiagoporto/reference-repository/blob/main/CONTRIBUTING.md).

## Donating

This project is developed in my free time, donations are welcome.

[![Donate](https://img.shields.io/badge/-🍺%20buy%20me%20a%20beer-eabb04.svg?style=for-the-badge)](https://tiagoporto.github.io/donation-page)

<p align="center"><img src="https://forthebadge.com/images/badges/built-with-love.svg"/></p>

## License

Reference Repository is released under the terms of the [MIT](LICENSE).
