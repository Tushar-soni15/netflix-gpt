# netflix gpt steps breakdown:

 - create react app
 - install and configure tailwind css
 - setup routing.
 - create login page
 - signu up form
 - form validation using useRef hook
 - firebase setup
 - Deploying the app to production
 - create signup user account in firebase 
 - implement sign in user API
 - created Redux store to append the user data into the appStore of redux 
 - Implemented Sign out and its reducer 
 - Updated profile with Display name of user (fixed the bug)
 - Implemented auth - if user is not logged in it cannot go to /browse page and vica versa.
 - unsbscribe the the onAuthStateChange function which was called on every render of Header component, therefore we have to unmount that.
 -  Add hardcoded values to constant files 
 - register TMBD ALI and create and app and get access token
 - get data from TMBD
 - Custom hook for now playing movies 
 - create movieslice 
 - update store with movie data
 - planning for videoStream container and MovieList container
  - fetch data for trailer videos
  - update store with trailer video info 
  - updates the store with the triler info
  - embeded the YT video 
  - make the video auto run.



# features of the app:

 - login/signup
   - signin / signup form 
   - redirect to browse page
 - Browse (after auth)
   - Header
   - Main container
      - trailer in bg
      - title and description of the trailer
      - movie siggestions and list 
        - movie list *n
 - Netlfix GPT
   - search bar 
   - movie suggestions with AI