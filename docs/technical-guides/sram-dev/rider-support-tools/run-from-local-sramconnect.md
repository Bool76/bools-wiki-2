# Run local environment w/ local Sramconnect

Overview - From your local Rider-Support-Tools environment, there is a way to run it with your local sramconnect environment



Prerequisites
1. Local sramconnect is up to date and environment is running

<br>

## Steps

1. From your local rider-support-tools repo find the file: appsettings.Development.json

1. Edit the file and add the following setting:
```
"LocalApi":{
      "ApiKey": "skip"
}
```
*Breakdown:*  
With the existence of the `LocalApi` setting, that will take precedence over `ApiGateway`. Because you’re using the LocalApi setting you don’t need to use an `ApiKey` so that is set to `skip` 

<br>

3. In it’s entirety the code from appsettings.Development.json could look something like this:

```
{
  "KeyVaultName": "rs-tools-kv-dev",
  "DataSource": {
    "ApiGateway": {
      "BaseUrl": "https://api-stage.sram.com/prx-public-api-qa/",
      "ClientId": "9135d45d890343099b40ad0cb08412ad"
    },
    "LocalApi":{
      "ApiKey": "skip"
    }
  },
  "ImagesBaseUrl": "https://sram-stage.sram.com",
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  }
}
```

4. Save changes to your file

> :warning: **Warning:** DO NOT commit these changes to the appsettings.Development.json file and merge them. Roll these changes back when you are finished.