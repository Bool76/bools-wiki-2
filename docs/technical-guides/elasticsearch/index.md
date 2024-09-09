# Elasticsearch

Overview - At this time this is going to just contain general information and notes related to Elasticsearch so that I can learn a little something about it


## Notes

- Not just for full text search can also handle data (though I don't know if that means searching that data or data form)
- Handles JSON requests
- Kibana - Is an option for a UI for Elasticsearch. Can create charts and other ways to look at data
- The point is there's an ES software stack that's available. I'm guessing that we aren't using it like this. 
- 



## Three Main Concepts

1. Document - Is like a row in a database. Something that you're searching for. Works on JSON structured data. ES will assign a unique identifier and give it a data type.

1. Types - You can have many documents that belong to a specific type. A schema is built off of the various types of documents. Types can also be thought of as a table in a database.  
WARNING - ES6 is moving away from types and is only defining one type per index.

1. Indexes (though others say indices) - 

<br>

### Hierarchy
Indexes (aka: database) -> Types (aka: table) -> Documents (aka: row)


## More random notes

- Index (or inverted index), refers to what documents something might occur but it looks like it's not recording the frequency. So for example it will "space" might occur in the doc 1 and doc 2. And it will record this as such, but it won't care how many times "space" occurs in doc 1.

Maybe?! 

It's possible that more data or parameters are made note of that he's not saying. Such as maybe the position of the word in the document. 