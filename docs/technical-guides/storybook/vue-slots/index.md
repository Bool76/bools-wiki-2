# Storybook | Vue Slots

Overview - In a Storybook story, if you call an instance of a component that has a slot, you can place in dummy content in that slot in the story so you can demo the slot being used. But how? 


#### Outline
1. Slot Basics
    1. What are Slots in Vue?
    1. Types of Slots
1. Basic Steps to use Slots in Storybook
1. [How to use Slots in Vue](/vue/slots/)
1. Use Slots in Storybook
    1. Use Default Slot
    1. Use 2 Custom Slots
    1. Use 2 Custom Slots and a Default Slot

<br><br>

## Slot Basics

#### What are Slots in Vue?
 When creating Vue components you can utilize something called "slots". Slots give containers if you will for content to be placed. A Vue component will have a default slot but you can create additional slots and give them a unique name so you can reference it. 

<br>

#### Two Types of Slots
1. Default Slot - Each Vue component that has a `<template>` section has a default slot where content can be placed. A `<slot>` without name implicitly has the name "default".
1. Custom Slot - A Vue component with a `<slot>` can be given a custom name by using the name attribute.  

<br><br>

## Basic Steps to use Slots in Storybook
1. In Vue file create a component
1. In the component declare Slots in Template section (whether just a default Slot or a custom slot)
1. In Storybook file (mdx) import the use of the Vue component
1. In the Story block: 
  1. Use `component` attribute to state what component you want to work with
  1. Use `template` attribute use the component by it's component name in tag format
  1. To use the default Slot:
      1. Between the component tags use a `<template>` tag 
      1. Place the `default` name inside of the `<template>` tag with the use of the #.  
      1. Place any content you want between the template tags
      *Example*
      ```
      <template name=#default>
        Some content
      </template>
      ```
      
  1. To use a custom Slot:
      1. Between the component tags use a `<template>` tag 
      1. Using the name of the custom slot place that inside of the template tag with a # before the name `<template #customName>`
      1. Place any content you want between the templates tags
      *Example*
      ```
      <template #left-slot>
        Left slot content
      </template>
      ```

<br><br>

## How to use Slots in Vue
[See Vue section on Slots](/vue/slots/)

<br><br><br>

## Use Slots in Storybook

<br>

### Use Default Slot
1. Inside of the component Vue file:    
    1. Create a `<template>` section 
    1. Declare default slot in Vue file by using the opening and closing `<slot>` tag w/ no name attribute given 

```vue
<template>
  <div class="asdf">
    <slot></slot>
  </div>
</template>
```
2. Inside of the Storybook file:
    1. Use the `<Canvas>` and `<Story>` doc blocks
    1. In the Story block: 
        1. Use `component` attribute to state what component you want to work with
        1. Use `template` attribute. Write an open and closing tag of the component you want to work with
        1. In between the open and closing tag place the content that you want in the default slot

<br>

```mdx
<Canvas>
  <Story name="Default">
      {{
        components: { SramHeaderNav },
        template: 
        `<SramHeaderNav>
          custom content
        <SramHeaderNav/>`
      }}
  </Story>
</Canvas>
```

<br>

**Result:**  
![Image from images folder](~@source/images/storybook/vue-slot/storybook_vue-slot_default-slot.png)

<br><br>

### Use 2 Custom Slots

1. Inside of the component Vue file:    
    1. Create a `<template>` section 
    1. Declare two custom slots in Vue file by using the `<slot>` tag and the name attribute 

```vue
<template>
  <div class="header-nav-left">
    <slot name="left-slot"></slot>
  </div>
  <div class="header-nav-right">
    <slot name="right-slot"></slot>
  </div>
</template>
```
2. Inside of the Storybook file:
    1. Use the `<Canvas>` and `<Story>` doc blocks
    1. In the Story block: 
        1. Use `component` attribute to state what component you want to work with
        1. Use `template` attribute. Write an open and closing tag of the component you want to work with
        1. In between the open and closing tag:
            1. Write a open and closing `<template>` tag for each custom slot
            1. For each `<template>` tag use the name of the custom slot with a `#` preceeding it


```mdx
<Canvas>
  <Story name="Default">
      {{
        components: { SramHeaderNav },
        template: 
        `<SramHeaderNav>
          <template #left-slot>Left slot content</template>
          <template #right-slot>Right slot content</template>
          <SramHeaderNav/>`
      }}
  </Story>
</Canvas>
```

<br>

**Result:**  
![Image from images folder](~@source/images/storybook/vue-slot/storybook_vue-slot_2-custom-slots.png)


<br><br>

### Use 2 Custom Slots and a Default Slot

1. Inside of the component Vue file:    
    1. Create a `<template>` section 
    1. Declare default slot in Vue file by using the opening and closing `<slot>` tag w/ no name attribute given 
    1. Declare two custom slots in Vue file by using the `<slot>` tag and the name attribute 

```vue
<template>
  <div class="header-nav-left">
    <slot name="left-slot"></slot>
  </div>
  <div class="header-nav-center">
    <slot></slot>
  </div>
  <div class="header-nav-right">
    <slot name="right-slot"></slot>
  </div>
</template>
```
2. Inside of the Storybook file:
    1. Use the `<Canvas>` and `<Story>` doc blocks
    1. In the Story block: 
        1. Use `component` attribute to state what component you want to work with
        1. Use `template` attribute. Write an open and closing tag of the component you want to work with
        1. In between the open and closing tag:
            1. Write a open and closing `<template>` tag for each custom slot
            1. For each `<template>` tag use the name of the custom slot with a `#` preceeding it


```mdx
<Canvas>
  <Story name="Default">
      {{
        components: { SramHeaderNav },
        template: 
        `<SramHeaderNav>
          <template #left-slot>Left slot content</template>
          <template #right-slot>Right slot content</template>
          <SramHeaderNav/>`
      }}
  </Story>
</Canvas>
```

