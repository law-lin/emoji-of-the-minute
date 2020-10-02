# Emoji of the Minute

Check it out [here](https://minutemoji.online/)
## Inspiration
We wanted to create a way for people to humanly interact with a site and impact it in a fun way. Everyone's vote matters!

## What it does
Each user can vote for the emoji of the minute. Every 60 seconds, the emoji that has the highest votes in that 60 second interval is displayed. You can see the net amount of votes for the top 11 emojis in the emoji ticker at the top.

## How we built it
We built it with JavaScript, React, Node.js, and Firebase.

## Challenges we ran into
Creating a synchronous 60 second time interval that would update the displayed emoji for everyone at the end of the interval was more difficult than we thought.

## Accomplishments that we're proud of
- Getting the ticker to work
- Creating a countdown timer that changes the current emoji when it reaches 0, and resetting all the votes
- Storing the upvotes/downvotes for a particular emoji and displaying them

## What we learned
We learned how to build a moderately complex web app that required synchronous functions.

## What's next for Emoji of the Minute
- Global and local leaderboards
- History of old emoji of the minutes
- Emojis voted for in the current minute interval
