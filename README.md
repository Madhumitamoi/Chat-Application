# Chat Application 

This is a chat application built with Node.js and Socket.IO. It allows real-time communication between multiple clients through a web browser. Users can join chat rooms, send messages, and receive messages instantly without the need to refresh the page.

## Features

- Real-time communication: Messages are sent and received instantly, providing a seamless chat experience.
- Multiple chat rooms: Users can join different chat rooms to have separate conversations.
- User nicknames: Users can choose a nickname to identify themselves in the chat room.
- Join and leave notifications: When a user joins or leaves the chat room, notifications are displayed to inform other participants.
- Typing indicator: When a user starts typing, a visual indicator is displayed to show that they are actively participating in the chat.

## Technologies Used

The following technologies were used to build this chat application:

- [Node.js](https://nodejs.org): A JavaScript runtime that allows running JavaScript on the server-side.
- [Express](https://expressjs.com): A fast and minimalist web application framework for Node.js.
- [Socket.IO](https://socket.io): A library that enables real-time, bidirectional communication between web clients and servers.
- HTML: The markup language used for structuring the web page.
- CSS: The styling language used for enhancing the appearance of the web page.
- JavaScript: The programming language used for implementing client-side logic and interactivity.

## Getting Started

To run the chat application locally, follow these steps:

1. Make sure you have Node.js installed on your machine. You can download it from the [official Node.js website](https://nodejs.org).

2. Clone the repository to your local machine or download the source code as a ZIP file.

3. Open a terminal or command prompt and navigate to the project's directory.

4. Install the dependencies by running the following command:
   ```
   npm install
   ```

5. Start the server by running the following command:
   ```
   npm start
   ```

6. Open your web browser and navigate to `http://localhost:3000` to access the chat application.

## Usage

- Upon opening the chat application in your web browser, you will be prompted to enter a nickname.
- Choose a unique nickname and click "Join Chat" to enter the chat room.
- Once inside the chat room, you can start sending and receiving messages in real-time.
- Use the input field at the bottom of the page to type and send messages to the chat room.
- You can also join different chat rooms by changing the room name in the URL. For example, `http://localhost:3000/?room=myroom` will create or join a room called "myroom".

## Contributing

Contributions to the chat application are welcome! If you find any issues or want to enhance its features, please submit a pull request or open an issue in the [GitHub repository](https://github.com/your-repo-link).

## License

This chat application is open-source and released under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the code as per the terms of this license.

## Acknowledgments

Special thanks to the developers and contributors of [Node.js](https://nodejs.org), [Express](https://expressjs.com), and [Socket.IO](https://socket.io) for providing the tools and libraries that made this chat application possible.
