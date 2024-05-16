<p align="center">
  <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="150" alt="React logo" /></a>
    <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/512px-Spring_Boot.svg.png" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/512px-Spring_Boot.svg.png" width="120" alt="Lambda Logo" /></a>
</p>

## Description

UnderworldsOdds is a currently only existing odds calculator for the biggest "ultimate competetive" board game created by Games Workshop. Here you can carefully prepare your next dice roll, based on fully customizable calculator which is working on binomial propability and Monte Carlo method. This app also utilises JWT auth, and allows authenthicated users to rate warbands available in game. 


## Installation

* Clone the repository
```
git clone https://github.com/FilipRudy/UnderworldsOdds.git
```

* Run npm install in 01-frontend
```
$ npm install
```

* You may need to turn on annotation processing in your 02-backend project due to lombok

## Running the app

* Run docker compose in 02-backend
```
cd docker
$ docker compose up -d
```

* Start backend in 02-backend
```
right click on SpringBootLibraryApplication and run
```

* Run npm start in 01-frontend
```
$ npm start
```
