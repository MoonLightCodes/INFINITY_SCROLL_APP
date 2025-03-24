# Infinite Scroll App for Dog Pictures 🐶

## About
This project is an **Infinite Scroll App** that displays random dog pictures fetched dynamically from the [Dog CEO API](https://dog.ceo/dog-api/documentation). As users scroll through the content, new images are automatically loaded to create a seamless browsing experience.

## Features
- **Infinite Scrolling**: Automatically loads more dog pictures as you scroll.
- **Responsive Design**: Optimized for both desktop and mobile screens.
- **Dog CEO API Integration**: Fetches random dog pictures from the public Dog API.

## How It Works
1. **API Requests**: On app initialization and when scrolling to the bottom, the app makes API requests to fetch new dog pictures.
2. **Dynamic DOM Updates**: Adds new images directly to the `#root` container.
3. **Scroll Event Detection**: Uses JavaScript to detect when users are near the bottom and triggers new API calls.

## Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Dog CEO API
