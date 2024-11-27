# Vitepress | Install Existing Site

<br>

Overview - When there's a Vitepress site that you want running on your local machine (e.g. Install Bools Wiki 2)

<br>

## Steps

1. Go to Github and copy the HTTPS link
1. In your local - Go to the directory where you want to install your project
1. Clone the repo on your local

```
git clone <<https link>>
```

4. Go to project root directory (e.g. Bools-Wiki-2)
1. Install project

```
npm install
```

6. [OPTIONAL] If you haven't run Vitepress commands on this machine you'll need to install Vitepress as a development dependency

```
npm install --save-dev vitepress
```

7. Start env:

```
npm run docs:dev
```
