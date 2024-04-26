# nvm

Overview - NVM stands for Node Version Manager. This is a tool you can use to manage what version of node you're in. Given a certain project might mean you have to be on a specific version of node and nvm allows you to bounce between different versions easily.

<br>

### How to Use

1. You'll need to know what version of node you want to be on

1. Run

```
nvm use v18.0.0
```

BREAKDOWN  
`nvm` == Command you need to start w/  
`use` == Keyword to indicate you're changing versions of node  
`v18.0.0` == This is a specific vesion but you can enter in whatever version you want to use

> :warning: **Warning:** FOR WINDOWS - You'll need to run nvm on in a terminal as an admin. To do this search for Terminal. Right click on it and select "Run as administrator"

<br><br><br>

### Helpful Commands

| Command | Example           | Description                                                    |
| ------- | ----------------- | -------------------------------------------------------------- |
| `use`   | `nvm use v18.0.0` | How to pivot to different versions of node                     |
| `list`  | `nvm list`        | Gives the list of available versions of node you can change to |

<br><br><br>

### Errors 

1. `node v18.0.0 (64-bit) is not installed.`  

**Overview** - Tried to install the `v18.0.0` version of node but didn't install

**What Happened** - I didn't have v18.0.0 on my machine so I couldn't install it.  

**Solution**
1. Run: `nvm list`
1. This showed the list of versions of node I could install
1. From that list v18.16.1 was there
1. Run: `nvm use v18.16.1`
1. I'm sure if you didn't have a version of 18 and you wanted one then you just have to figure out how to first install that version of 18 that you wanted on your local machine and then you should be able to `use` it

> :warning: **Warning:** FOR WINDOWS - You'll need to run nvm on in a terminal as an admin. To do this search for Terminal. Right click on it and select "Run as administrator"