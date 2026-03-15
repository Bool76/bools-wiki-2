# Nuxt Authorization and Sessions

Summary - Random notes on how Nuxt can work with auth and sessions. Might keep this pretty loose.


## Notes

nuxt-auth-utils - Module that could handle authorization and sessions

Q - What can it do? 

<br>

#### Sessions

Nuxt Auth Utils which provides convenient utilities for managing client-side and server-side session data.  

<br>

**Cookie Encryption Key** - Uses sealed cookies to store session data, session cookies are encrypted using a secret key from the NUXT_SESSION_PASSWORD environment variable.

And if you recall you'll need to have some sort of cookie management for controlling sessions. 

<br>

The  NUXT_SESSION_PASSWORD should be set in the `.env` file

<br>

#### Our Solution for Chatbox Login

