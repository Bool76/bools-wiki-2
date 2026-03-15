# Authorization + Sessions

Summary - I didn't know where to put this topic. I've found the need to take notes and reflect on what I am learning regarding "auth" and sessions. 

<br>

## Sessions

Summary - How you keep a user logged in securely  

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


<br>

## Notes

#### Session Based on Session ID 

When a user logs in, the server should give them a session id. Then cookie is saved on client machine

In this the session id would have to be stored in the server

---

#### Middleware

Summary - Can be considered the glue that can tie 2 or more apps together to do a thing  

Middleware was what we were thinking about using to create a login for Chatbot. So there would be some sort of connection. 

Global Middleware (Middleware) 

Routing middleware. Where Cenzo started. Securing an endpoint. Routing is most important. 

1. A map of paths that you direct a user to. 

2. Security of some sort. Maybe using an API Key for this routing and security around routing. You have to trigger a secure session.

Authentication and routing middleware. 






