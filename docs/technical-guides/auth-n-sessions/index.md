# Authorization + Sessions

Summary - I didn't know where to put this topic. I've found the need to take notes and reflect on what I am learning regarding "auth" and sessions. 

<br>

## Sessions

Summary - How you keep a user logged in securely

<br>

They answer: "Who is this user, and are they really logged in?"


Other things it deals with:

 - Cookies 
 - Tokens
 - Session ID

<br>

#### Flow Example (Typical Web App)

1. User logs in
1. Server creates secure session (Cookie or JSON Web Token)
1. On request:
- Session verifies identity
- Auth utils check permissions
- Route either proceeds or returns 403

