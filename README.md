# provoice

The Invoice app

This project uses:

- [yarn](https://yarnpkg.com/en/docs/getting-started) - node package manager
- [lerna](https://github.com/lerna/lerna) - a tool for managing JavaScript projects with multiple packages.



You can install all packages (including respective dependencies) and link them using the following command:

```
$ cd <provoice>

## only needed to run occasionally...
$ yarn install

## run to link project packages listed above...
$ yarn run bootstrap
```

## example
To add new node module say angular
```
$ lerna add angular@version --scope=provoice-web
```

**NOTE:** Changes made to any individual package must follow the normal process of creating a PR, adding, committing, and pushing to its own repo.
