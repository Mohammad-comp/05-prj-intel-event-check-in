# Intel Sustainability Summit Check-In

An interactive event check-in app that welcomes attendees, tracks attendance, and encourages friendly competition between sustainability teams.

## Live Website

[View the app](https://mohammad-comp.github.io/05-prj-intel-event-check-in/)

## Features

- Personalized greetings using the attendee’s name and selected team.
- Total attendance updated after every check-in.
- Individual counters for Team Water Wise, Team Net Zero, and Team Renewables.
- A progress bar showing attendance toward a goal of 50 attendees.

## LevelUps

- **Celebration Feature:** Displays a celebration message naming the team with the highest attendance when the goal is reached.
- **Save Your Progress:** Uses browser local storage to preserve attendance and team counts after refreshing or reopening the page.
- **Attendee List:** Displays attendee names and teams beneath the team counters.

## Built With

- HTML
- CSS
- JavaScript
- Browser localStorage
- GitHub Pages

## How to Use

1. Enter your name.
2. Select your team.
3. Click **Check In**.
4. See your greeting, updated attendance, team count, and attendee list entry.

Saved attendance is specific to the browser used for check-in.

## What I Learned

This project helped me understand how event listeners connect user actions to page updates. I practiced reading form inputs, updating counters, displaying data, and saving progress with localStorage.

## Testing

I tested check-ins for all three teams, checked that team counts added up to total attendance, and confirmed that saved counts survived a refresh. I also verified that the progress bar stays full after the goal is exceeded and the celebration identifies the leading team.
