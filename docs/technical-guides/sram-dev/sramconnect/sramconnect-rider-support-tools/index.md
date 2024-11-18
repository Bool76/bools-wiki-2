# Sramconnect | Rider Support Tools 

<br><br>

## Random Notes

<br><br>

Where is there a list of filters that are helpful? 

C:\Git\sramconnect\Sram.Common\Constants\Search\AggregationConstants.cs

*Code Example*

```
namespace SRAM.Common.Constants.Search
{
    public class AggregationConstants
    {
        //zg: These are tired directly to SRAM.Common.Properties.SearchFilterTranslations
        //so be careful when modifying
        public const string MAJOR_USAGE_AGG_ID = "ride";
        public const string MINOR_USAGE_AGG_ID = "specialty";
        public const string BRAND_AGG_ID = "brand";
        public const string TECHNOLOGY_AGG_ID = "tech";
        public const string PUBLIC_PRODUCT_TYPE_AGG_ID = "cattype";
        public const string PRODUCT_TYPE_AGG_ID = "type";
        public const string PRODUCT_FAMILY_AGG_ID = "family";
        public const string SERIES_AGG_ID = "series";
        public const string COLLECTIONS_AGG_ID = "collections";
        public const string BUILDER_AGG_ID = "builder";
        public const string UPC_CODE_AGG_ID = "upc_code";
        public const string SPECIAL_PSUEDO_AGG_APPLIED_SEARCH = "special_applied_search";
        public const string LANGUAGE_AGG_ID = "language";
        public const string GROUP_AGG_ID = "group";
        public const string GROUP_ID_AGG_ID = "group_id";
        public const string MEDIA_TYPE_AGG_ID = "media_type";

        public const string MODEL_CODES_AGG_ID = "model_codes";
        public const string FG_MODEL_CODES_AGG_ID = "fg_model_codes";
        public const string REPLACEMENT_PART_COMPATIBILITY_AGG_ID = "replacement_part_compatibility";

        public const string SPECIFICATIONS_NESTED_AGG_ID = "specifications";
        public const string SPECIFICATIONS_ID_AGG_ID = "specifications_id";
        public const string SPECIFICATIONS_DISPLAY_AGG_ID = "specifications_display";
        public const string SPECIFICATIONS_VALUES_AGG_ID = "specifications_values";
        public const string MODEL_CODES_TO_FGS_REVERSE_NESTED_ID = "model_codes_to_fgs";
        public const string MODEL_CODES_REVERSE_NESTED_TERMS_AGG_ID = "model_codes_per_spec_value";

        public const string AGG_DISPLAY_NAME_META = "AggregationDisplayName";
    }
}
```