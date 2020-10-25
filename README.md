# NLP Speech Analysis
Created for HackTX 2020 by [Rishi Ponnekanti](https://www.linkedin.com/in/rishiponnekanti/), [Ishan Shah](https://www.linkedin.com/in/ishan0102/), [Michael Chen](https://www.linkedin.com/in/xige-michael-chen-7a4a45190/), [Timothy Situ](https://www.linkedin.com/in/timothy-situ-246569191/), and [Caleb Yu](https://www.linkedin.com/in/calebyu7/). Check out our [Devpost](https://devpost.com/software/nlp-speech-analysis)!

## Inspiration
In our engineering classes, we rarely get chances to practice our speaking and presentation skills. This makes it a lot harder to perform well in interviews since we lack a lot of the necessary experience. Add to that the lack of human interaction due to Covid-19 and it's nearly impossible for students to gather feedback on where they can improve their speaking.

## What it does
Our platform lets users record video to practice speaking for interviews, presentations, or any other occasion. We then provide feedback about the mood, tone, and other analysis the software determined based on the video. We think this is especially relevant during times like these where the majority of communication is done via online video platforms like Zoom, Microsoft Teams, and Google Meet.

## How we built it
The main platform is built using React for the frontend and Node/Express for the backend. The recorded video is converted to WAV format using [FFmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg), a media conversion tool. We used [Google Cloud's Natural Language products](https://cloud.google.com/natural-language) for speech-to-text conversion and analyzing speech syntax. That information then gets sent over to the frontend and displayed in a visually appealing way.

## Challenges we ran into
- Figuring out how to manipulate the recorded video took hours. We had to play around with a ton of different libraries and finally ended up settling on Axios to transfer the video from the client to the server.
- FFmpeg is intended to be a command-line tool, so being able to convert media server-side involved playing around with many different FFmpeg libraries for Node.
- Calling the Google Cloud functions was challenging because JavaScript by nature executes asynchronously, leaving us to set up the program flow in a way that ensured functions were getting executed in the correct order.

## Accomplishments that we're proud of
Working on a project with tools you've never used is exciting, but not easy. We're really proud that we kept from getting discouraged everytime we hit a road block and were successful in executing our original idea, albeit not including every feature we would've liked to implement. We are also glad that we got this opportunity to learn so many new tools that we'll hopefully keep building with.

## What we learned
Before this project, our team hadn't had much experience with web development, let alone creating a full-stack JS web app. This project was a great way to learn how to integrate extensive APIs like Google Cloud's into a functional website to accomplish some goal. We think that this will unlock new doors for us and make it easier for us to build anything we come up with moving forward.

## What's next for NLP Speech Analysis
We'd like to focus on a few features that we think are straightforward and will provide great value:
- Visual analysis with [Google Cloud Vision AI](https://cloud.google.com/vision) to understand facial expressions
- Eye-tracking frame by frame to see how well a user is able to maintain eye contact
- Stronger feedback on a user's spoken words (similar to services like Grammarly, except for speech)
