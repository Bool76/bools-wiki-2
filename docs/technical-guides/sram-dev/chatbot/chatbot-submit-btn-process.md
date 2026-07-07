# Chatbot | Submit Button Process

Summary - An overall view of the parts of the Deep Chat / Chatbox code that are involved with the submit button, receiving a stream of information from the API, and the stop button

---

## Parts of Code

Summary - Deep Chat made up of Functions and Object Listeners

<br>

### Functions

Summary - Plain functions that are called. Think of it like: "You tell Deep Chat / Chatbox what's happening"  

- onOpen() 
- onResponse({text})
- onClose()

<br>

### Object | Listeners

Summary -  Objects w/ a listener that Deep Chat calls. Think of it like: "Deep Chat taps you when the user does something"

- stopClicked
- newUserMessage

<br>

### Phone Call Analogy for Chatbot States

Summary - In order to understand Chatbots main functions (around the API), Claude broke it down into an analogy using makeing a phone call

| Signal               | Phone analogy                                                             | Direction / when                                    | Kind (JS type)                                 |
| -------------------- | ------------------------------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------- |
| `onOpen()`           | ☎️ "Call connected"                                                       | **you call** — once, at start                       | function — `() => void`                        |
| `onResponse({text})` | 🗣️ the other person **talking** — words arriving                          | **you call** — many times, the flow                 | async function — `(response) => Promise<void>` |
| `onClose()`          | 📵 **you hang up** — "call's over"                                        | **you call** — once, at end                         | function — `() => void`                        |
| `stopClicked`        | 🛑 the caller **mashes the hang-up button** — your listener cuts the line | **Deep Chat calls you** — when user clicks Stop     | object — `{ listener: () => void }`            |
| `newUserMessage`     | 🔔 the caller **speaks up again** — a new message comes through           | **Deep Chat calls you** — when user sends a new msg | object — `{ listener: (body) => void }`        |
