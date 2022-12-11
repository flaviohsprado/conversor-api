# Currency Converter

## Purpose

This application has the purpose of converting between two currencies updated in the market. To do this, you will need to create a user to access this feature.

## Features

The application has some features, namely `user creation`, `authentication` and search for `currency conversion`.

- `User creation` is done in a simple way using bcrypt to generate hash's and encrypt passwords, it is also used together with JWT to create access token.

- `Authentication` JWT and Passport resources are used for user token generation and validation. Passport JWT allows me to authenticate each endpoint of my application using JWT in a very easy way, being very flexible and being able to create specific rules for each endpoint in particular.

- `Currency Conversion` it's basically a search performed on a third-party API that returns the updated value of any desired currency.


## Technologies used

The technologies chosen were [NestJS](https://docs.nestjs.com/) and Typescript, these were chosen because they were well matched at the time of development, and the NestJS framework requires some experience with [SOLID](https://en.wikipedia.org/wiki/SOLID) principles and the [Clean Architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg) standard, but when you have that experience it is very easy to run the job. The framework also offers a very large number of features, recipes and techniques in your documentation that are ready to use easily, allow your application to work with modules and be much more flexible and expansive. I'm also using Redis for the purpose of caching information (The TypeORM dependency itself already has this option, but I didn't want to use it for now) along with the PostgreSQL database, because they are easy to access and free.


## Layers division

This application was designed using the Clean Architecture pattern, also known as hexagonal architecture. As stated earlier, SOLID principles are used in the code, mainly the [Dependency Inversion Principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle) which matches very well with NestJS dependency injection.

Concretely, there are 3 main packages: `domain`, `usecases` and `infrastructure`. These packages have to respect these rules:

- `domain` contains the business code and its logic, and has no outward dependency: nor on frameworks (NestJS for example), nor on `usecases` or `infrastructure` packages.

- `usecases` is like a conductor. It will depend only on `domain` package to execute business logic. `use_cases` should not have any dependencies on `infrastructure`.

- `infrastructure` contains all the technical details, configuration, implementations (database, web services, etc.), and must not contain any business logic. `infrastructure` has dependencies on `domain`, `usecases` and frameworks.

## Install

```
npm install --force
```

## Test

```
npm test
```

## Run

```
npm run start:dev
```