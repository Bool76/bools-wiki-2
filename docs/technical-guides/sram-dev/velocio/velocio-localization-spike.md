# Velocio | Internationalization Spike

#### Summary

Currently somehow localization / internationization is happening in the Nuxt platform. Currently a user sees a United States or International modal, then they must select from a giant list of possible countries outside the US.

We wanted to look at utilizing Vercel to identify by IP what country a user is in and set it as such.

The following is going to be a bit of a brain dump, Claude inspired, of how Vercel can help and how we can move forward.


<br>

## High Level Components Involved


Summary - These are the high level components involved with Vercel's localization 


NOTE: Vercel will refer to some of their software as "Edge", this is just a marketing / branding term. For example "Vercel Edge Middleware".


<br>



| Piece                  | File                                                 | Runs Where                | What It Does                                                                                                                                                      |
| ---------------------- | ---------------------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vercel Middleware      | middleware.ts                                        | Vercel edge (before Nuxt) | Geo-detects country from IP, reads/writes `velocio-country` cookie, redirects to correct domain                                                                   |
| Country Cookie         | `velocio-country` (browser cookie)                   | Edge + browser            | Shared source of truth — plain ISO code (`US`, `DE`, etc.), written by middleware and `updateLocalization`, read by middleware on every request                   |
| Pinia Shop Store       | app/stores/shop.ts                                   | SSR + client              | Holds full Shopify locale object (country, currency, language); persisted via `@nitrogen/shop` cookie for SSR; `getLocalization()` fetches live data from Shopify |
| Locale Modal           | app/components/modals/locale-modal.vue               | Client only               | Manual override UI; handles `?setCountry` and `?showCountries` URL params; no longer auto-shows for new visitors                                                  |
| `updateLocalization()` | app/components/modals/locale-modal.vue               | Client only               | Central action: redirects to correct domain if needed, updates cart buyer identity, fetches new locale, writes cookie                                             |
| Shopify `@inContext`   | server/graphql/                                      | Server (Nitro)            | Passes `country` + `language` context to every Shopify query so prices return in the right currency                                                               |
| Two-Store Architecture | nuxt.config.ts + app/composables/use-store-config.ts | Build + runtime           | `velocio.cc` (US) and `intl.velocio.cc` (INTL) are separate Vercel deployments pointing to separate Shopify stores                                                |

<br>

### Flow for New Visitor

Request hits Vercel middleware.ts   
 ↓  
middleware.ts — geo-detect country, set cookie, redirect if wrong domain  
 ↓  
Nuxt SSR — pinia reads @nitrogen/shop cookie (or defaults to US)  
 ↓  
app.vue onMounted — shopStore.getLocalization() refreshes locale data  
 ↓  
locale-modal onMounted — checks ?setCountry / ?showCountries params only  
 ↓  
All Shopify queries use @inContext with the correct country → correct prices

<br><br>

## Ian's Dev Notes

Summary - Vercel is able to offer us Internationalization. This is done through Vercel Edge Middleware (middleware.ts). 

Simply put... Introducing Vercel middleware that takes over routing responsibilities and routes user to correct country site experience, based on their IP

<br>

### Components

<br>

##### Vercel Middleware
1. middleware.ts file
1. Placed in project root
1. Detects country from IP and sets `velocio-country` cookie and routes site to correct country site experience 

<br><br>

### Testing Internationalization 

Summary - We are able to test the new Internationalization feature in a non-prod environment, but not in a local environment. A test query param has been added to the middleware.ts file to provide as an override for geo-detection.

##### Steps

1. Go to the test url / preview url
1. Wait for site to load
1. Add the query param `?testCountry=XX` + a country code you want to test for (e.g. `?testCountry=DE` )
1. Site will refresh and display the proper country site experience. NOTE: The country will be indicated w/ the icon in the footer, on left 

<br><br>

### Initial Preview Testing Issues
1. 


<br>

## Current Questions | Testing Items | To Dos

### User work flows
Summary - asdf  
    1. User starts in US and then changes to an international experience through footer icon
        - Does this still work?
        - Should be done through the footer icon (bottom left)
        - Is this still the experience we want? 

    1. User starts in an international experience and is able to change to a different international site experience through the footer icon
    1. User starts in an international experience and is able to change to a the Unitied States site experience through the footer icon 

<br>

### Preview Testing  
Summary - If you add the URL variable `?testCountry=DE` to the preview link, it appears to redirect you to the correct country. However it seems to change from the preview link to the production link

    Example:
    1. Go to: https://velocio-preview-git-wd-3597-update-regionalization-feature.sram-vercel.dev/
    1. Add the url var: `?testCountry=DE` 
    1. Site will refresh and go to the url "https://intl.velocio.cc/" w/ the proper country in the footer. HOWEVER that's the production url and no longer in preview  
    <br>
        Issue(s):
        1. From this stand point, I won't be able to test then changing the country from the footer, with my feature branch because I'm now in prod

<br>

### README.md
Summary Write / Add clear documentation on how to test internationalization from the preview link 

