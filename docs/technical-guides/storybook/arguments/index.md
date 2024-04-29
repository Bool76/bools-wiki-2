# Storybook | Arguments (Args)

Overview - A Storybook component can accept arguments (or Args) which can control how a component is displayed

- THey are defined in a single Javascript object

- Arg can be considered an object

- Composed of string keys w/ matching value types that can be passed into a component

<br>

### Resources
1. https://storybook.js.org/docs/writing-stories/args
1. https://dev.to/dailydevtips1/storybook-args-and-parameters-4187

<br>

### Levels of Args
1. Story
1. Component
1. Global 

<br>

## General Notes


<br><br>


- Seems like there's some importance on what type of `export` that you use
    - Component level args seem to use `default` export
    - Story level args seem to use a custom name? `export const PrimaryLogName`


<br>

### Some sort of create const and using args

```javascript
const Template = (args) => <Button {...args} />;
```
- I don't know what this is but it looks like what we might be doing

Q - Where did `Template` come from?

<br>

### What is the use of bind all about?

In sram-ui:
```javascript
export const SramStory = (args) => ({
  components: { SramButton },
  setup() {
    // console.log(args);
    return { args };
  },
  template: `<SramButton :hollow="args.hollow" :reversed="args.reversed" :label="args.label" :url="args.url"></SramButton>`
});


<Story
  name="Primary, reversed, hollow"
  args={{
    reversed: false,
    hollow: false,
    label: 'my button',
    url: ''
  }}>
  {SramStory.bind({})}
</Story>
```

Webpage example:
```javascript
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
```
<br><br>




## Level of Arguments


#### Story Level Args
*Example*
```Javascript
export const Primary = {
  args: {
    label: 'Button',
    primary: true,
  },
};
```

- Listing arguments as an object - Which I have seen before
- I don't know what `Primary` is doing and why I need to define it as some sort of variable that needs to be exported?
- This might be the "CSF story key" but I don't know what that is

<br>

#### Component Level Args

Will apply to all the component's stories unless you overwrite them. To do so, use the args key on the default CSF export


*Example*
```Javascript
export default {
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
};
```
<br>

#### Global Level Args

Will apply to every component's stories unless you overwrite them. To do so, define the args property in the default export of preview.js

*Example*
```Javascript   
export default {
  // The default value of the theme arg for all stories
  args: { theme: 'light' },
};
```



