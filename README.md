# provoice

[![Greenkeeper badge](https://badges.greenkeeper.io/Dynamic-Flakes/provoice.svg)](https://greenkeeper.io/)

The Invoice app

This project uses the following technology:

- [yarn](https://yarnpkg.com/en/docs/getting-started) - node package manager
- [lerna](https://github.com/lerna/lerna) - a tool for managing JavaScript projects with multiple packages.
- [NodeJS](https://nodejs.org/en/) for back-end.
- [Video](https://www.youtube.com/watch?v=9S-mphgE5fA) referered to integrate Redis and Node.
-[Draw.io](https://www.draw.io) to create diagrams.
- [mLabs](https://mlab.com/) used to store sessions in MongoDB.
- [AWS](https://aws.amazon.com/free/) for deployment.
- [Heroku](https://www.heroku.com/) to deploy front-end.


# Weekly progress
## Week 1:
* Decided the project idea and road-map.
* Decided what technology stack should be used.
* Went through multiple project ideas and discussed each one.
* Need to distribute tasks related to development to team members leveraging expertise knowledge.
* Discussed how each microservices services  would integrate with each other.
>Agenda: Road-map for Project and Task Distribution 

>Number of meeting hours this week: 2

## Week 2:
* Finally agreed on provoice App prototype.
* Finished wrapper API individually for database clusters.
* Reviewed as a team - Feasible timeline of tasks and responsibilities.
* Started coding for back-end.
>Agenda: To select the Application. Talk about API Document. Make trello Board to get the project done in desired timeline.

>Number of meeting hours this week: 2

## Week 3:
* Created a design architecture.
* Discussed how the functionalities will split.
* Created a docker instance for different services.
* Defined best api gateway for service discovery.
* Front-end in ANGULAR finished.
>Agenda: Design Architecture, Functional Split, Sharding, Replication stratgy.

>Number of meeting hours this week: 3

## Week 4:
* UI Improvements.
* Finished all the functionalities.
* Hosted the front-end on Heroku.
* Hosted the back-end on AWS.
* Connected MongoDB to maintain session.
* Added load balancers.Nginx
>Number of meeting hours this week: 5

## Week 5:
* Finished writing the Project Journal.
* Tested the performance of the Provoice App prototype.
>Number of meeting hours this week: 1

# Challenges faced:
* Creating the design of the system.
* Set up the tools required for the application to work.
* Integrating front-end and back-end.
* Integrating Several APIs.
* Some conflicts in the code took significant amount of time to resolve.
* How to achieve functionality split.
---

# Project Setup:

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
