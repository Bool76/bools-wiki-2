# Velocio

Summary - This is at first going to be a high level description of the architecture of the site and how it works

<br>

## Technology

<br>

| Technology / Tool | Purpose                              | Notes                                                                                                                                                                                                        |
| ----------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Klaviyo           | Marketing and customer data platform | Integrated with the site. Used for:<br>- Back-in-stock notifications (automatically sent when inventory is replenished)<br>- Custom email signup form in the footer<br>- Promotional pop-up offering 15% off |
| Nitrogen          | Starter template                     | Provides the foundation for the Nuxt project and is inspired by Shopify's storefront architecture.                                                                                                           |
| Nuxt              | Frontend framework                   | Uses the **Nitrogen** starter template, which was inspired by Shopify                                                                                                                                        |
| Sanity            | Content Management System (CMS)      | Integrated with the site and used to manage website content                                                                                                                                                  |
| Shopify           | Manage products on site              | Where to manage products / collections /etc                                                                                                                                                                  |
| Tailwind CSS v4   | CSS framework                        | Used for styling the site.                                                                                                                                                                                   |
| Vercel            | Hosting platform                     | Hosts the storefront application.<br>https://vercel.com/sram-web/velocio-storefront                                                                                                                          |

<br><br>

## Sanity | Start Locally / Login Locally

Summary - How to start / login to Sanity locally. Why? Cause getting into Sanity locally is different from just starting the Velocio project locally. 

<br> 

1. Open your code editor  


1. In a terminal go to the following directory within the project: 
```
/velocio-storefront/sanity
```  

3. Run sanity locally:
```
pnpm dev
```

4. Go to the site in your browser:  
http://localhost:3333/


5. Login with your email + password that you setup with Sanity  
![Image from images folder](/sram-dev/velocio/velocio-sanity-login.png)
<br>

6. When you login there could be a variety of pages you land on. In general know that you want to be in the SRAM LLC and then find the Velocio project / space
![Image from images folder](/sram-dev/velocio/velocio-sanity-sram-llc-velocio.png)

<br><br>

## How to start Local Environment

<br>

## Pushing to Prod

Summary - As of right now (2026-07-21) when code is merged via Github, then the changes will IMMEDIATELY be present on production
