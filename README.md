* As an user, I'd like to know the current weather for a desired location.
  - User input location, and the UI queries the weather API to retrieve the current weather
  - Current weather data is presented to the user. The current status must be shown with an icon (sunny, rainy, cloudy, etc)

* As an user, I'd like to know the weather for the next 5 days for a desired location.
  - There should be a button to show the weather for the next 5 days
  - Next 5 days weather has to be retrieved from the weather API
  - Min and Max temperature, along with climate icons has to be shown in 5 boxes

* As an user, I'd like to be able of switching between Farenheit and Celcius degrees.
  - User decision has to be persisted between reloads

Non functional requirements:
- Use redux to keep application state
- The UI should have an user friendly design (use icons for)
- The UI should be optimized for mobile resolutions
- Errors have to be presented on a modal view that the user can close
- Use axios to query the weather API


-----------------------------------
- Application based on `create-react-app`
- Fetch weather data from `http://api.apixu.com/v1/forecast` using `axios`
- Include `styled components`

----------------------------------\
Improvements:
- Add form validation to styled components
- Add modal on API error
- Use ramda or lodash
- Get extended forecast adding a "More" button and doing a new call to the API
- Clear search
- Search on enter
