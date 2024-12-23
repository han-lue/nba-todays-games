# NBA Games of the Day

## About the project

One can use nba.com or NBA's mobile app to check the list of games on any date. However, the website and specifically the mobile app often take a while to load due to how much other information and services they contain. This can be annoying for a user who only wants to check the list of games, which is why NBA Games of the Day was developed.

[nbagamesoftheday.vercel.app](https://nbagamesoftheday.vercel.app/) only shows the list of NBA games on the date selected by the user and nothing else. If a game hasn't started, it shows the time it will start in users timezone. And, if a game has started, it shows the scores instead.

## Where does the data come from?

To retrieve data about the games, a third party API called [Ball Dont Lie](https://www.balldontlie.io/) is being used.

## How to locally run

If you'd like to locally run the website you need to use your own API key, which requires you to follow the steps below

1. Go to https://www.balldontlie.io/, create an account for free and get an API key.
2. Create a .env file in the project directory
3. Add the following lines in the .env file (don't forget to replace the example API key with your own key)

```
VITE_API_KEY = d3sd2ff4gf71-3ghjfs34-1n13-81fg-18d48a34asc
VITE_API_GAMES_URL = https://api.balldontlie.io/v1/games
```
