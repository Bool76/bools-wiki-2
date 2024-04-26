# Tailwind

Summary - A CSS framework of sorts that provides low level utility classes. Tailwind differs from frameworks like Bootstrap because it gives small building blocks and not a large structure to follow (I might want to reword that). Bootstrap comes with reusable components where in Tailwind you must create your own

### Why use Tailwind

With low level building blocks it gives the developer more flexibility to create custom components and not be tied to out of the box components that come with frameworks like Bootstrap. Bootstrap sites can have the same look and feel where with Tailwind you have much more freedom to create visual components the way you want. 

### What you need

1. Node Package Manager (npm)
1. Node JS


### How does it work

There's a source file that imports all of the Tailwind core styles and functionality. Tailwind (a command) will process that file and create a public vanilla css file that a site will point to. This means that everytime there's a change or customization to the Tailwind src file, a Tailwind command must run which will create a new public css file.

**src directory** - Location of Tailwind CSS type files  

**public diretory** - Location of compiled CSS to be used for your site

In the package.json file enter in a script to run the Tailwind compiler:

```
  "scripts": {
    "build-css": "tailwindcss build src/styles.css -o public/styles.css"
  },
```

`src/styles.css` === Location of the Tailwind css files  
`public/styles.css` === Location of the public facing vanilla style sheet  

<br>

To run the Tailwind compiler: 
```
npm run build-css
```



