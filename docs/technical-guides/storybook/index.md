# Storybook

Overview - Storybook allows developers to display UI components, display a component's different states, share the component's code
base, and share any other desired documentation

<br>

---

### Basic Storybook Concepts

1. Components
1. [Story](/storybook/storybook-story/)

#### What are components?

Think of them as a stand alone, reusable, UI component. Components can be written in different languages such as Vue.

<br>

#### What are stories?

A story is a captured instance of a component in a specific state. A developer can write multiple stories per one component to show how to use a component. In other words each component can have many stories that show the states it supports.

<br>

---

### What are typical tools / concepts used in a Storybook Story?

1. imports
1. Markdown
1. DocsPage
1. Canvas Block
1. Story Block
1. Meta Block

<br>

#### How are "imports" used?

Import statements are used to import the use of different [Doc Blocks](/storybook/doc-blocks/) and UI Components

<br>

#### How is Markdown used?

Markdown can be written inside of a Story to document any helpful or extra information on a Component

<br>

#### How are DocsPage used?

This is a page within each Storybook component that gives general summary of the component, source code, and meta data

> :memo: **Note:** DocsPage looks like it has to be installed or included somewhere in the package.json file

<br>

How to get to it?

1. Click on the component you want to see from the left hand navigation
1. Once open click on the "Docs" link at the top

_Example_  
![Image from images folder](~@source/images/storybook/storybook-basics/storybook-basics-01.png)

<br>

BREAKDOWN:  
"Button takes a number of arguments" == That whole section is written with Markdown (bullet points, etc)  
Code section | Button and `<SramButton>` section == RIGHT NOW I DON'T KNOW WHERE THAT IS COMING FROM

<br>

#### What's the deal behind Blocks?

Canvas, Story, and Meta are blocks that can be used in a Story file. When in usage they'll look like html tags. They each hold their different type of functionality within Storybook which are helpful ways to display a component. Please see each seperate page on these blocks for more information.

_Example_

```mdx
<Canvas>
  <Story
    name="Primary, reversed, hollow"
    args={{
      reversed: false,
      hollow: false,
      label: "my button",
      url: "",
    }}
  >
    {SramStory.bind({})}
  </Story>
  <Source
    language="html"
    dark
    code={`<SramButton 
    :hollow="args.hollow"  
    :url="args.url">
    </SramButton>`}
  ></Source>
</Canvas>
```

BREAKDOWN  
`<Canvas>` - This indicates the start of the Canvas Block  
`<Story>` - This indicates the start of the Story Block  
`<Source>` - This indicates the start of the Source Block
