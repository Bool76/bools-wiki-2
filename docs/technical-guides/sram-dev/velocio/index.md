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

## How to start Local Environment

<br>

## Pushing to Prod

Summary - As of right now (2026-07-21) when code is merged via Github, then the changes will IMMEDIATELY be present on production
