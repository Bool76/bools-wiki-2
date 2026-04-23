# Nuxt | Use Sanity Field Value

Summary - When in a Nuxt Project with the Sanity CMS and you want to use / expose a value from a Sanity custom field on a Vue page (html)

<br>

### Concepts + Terms 

Sanity CMS - This is a type of CMS that we're working with on the Velocio project. So Sanity allows users to add / edit content to a Nuxt site (Velocio)

<br>

## Velocio Project Example | Add Field and Expose it

Summary - Request to customize Terms and Condtions for different user types (aka: SRAM Employee and Industry User). The following will give an overview of steps with some details of how to expose the value of a new Sanity field in the Velocaio Nuxt project. 

<br>

### Steps

1. Create the new Sanity field in the `sanity` directory of the Velocio project - I don't want to say anymore on this topic even though there could be a ton of information to give on how to do this

1. Identify what page you want to expose the value(s) of the new field - We want to show it on the Account page which is in the Vue file:
`app/pages/account/index.vue`


1. In the `<script>` tag place the following:  
```
const { data: accountSettings } = useSanityQuery(
  groq`*[_type == "accountSettings"][0] {
    ambassadorTermsConditions,
    industryTermsConditions,
    sramEmployeeTermsConditions,
    vipTermsConditions

  }`
)
```
Breakdown:  
    a. `data: accountSettings` == This is the new field that was created   
    b. `ambassadorTermsConditions` + `industryTermsConditions` + etc == Specific names of fields for Account Settings that we want to use

<br>

4. Expose the correct Terms and Conditions, Sanity field value
```
<div class="terms-conditions pt-6"> 
    <span v-if="userAccessTag === tagLabels.ambassador" >
        <PortableText :blocks="accountSettings?.ambassadorTermsConditions"  />
    </span>
    <span v-if="userAccessTag === tagLabels.industry" >
        <PortableText :blocks="accountSettings?.industryTermsConditions"  />
    </span>
    <span v-if="userAccessTag === tagLabels.sram_employee" >
        <PortableText :blocks="accountSettings?.sramEmployeeTermsConditions"  />
    </span>
    <span v-if="userAccessTag === tagLabels.vip" >
        <PortableText :blocks="accountSettings?.vipTermsConditions"  />
    </span>
</div>
```
Breakdown:  
    a. `<PortableText>` == Tag that's used to expose a Sanity field value  
    b. `:blocks="accountSettings?.sramEmployeeTermsConditions"` == Used to pass in the `accountSettings` field and specifically the SRAM Employee Terms and Conditions, `sramEmployeeTermsConditions`. 
