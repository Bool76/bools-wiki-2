# Storybook | Story

Overview - A story is a captured instance of a component in a specific state. A developer can write multiple stories per one component to show how to use a component. In other words each component can have many stories that show the states it supports.

<br>

### File Types

Stories can be written as:

1. MDX files (mdx)
1. Typescript (ts)
1. Javascript (js)

<br>

#### MDX Files

**What are they?**

Combination of: Markdown + JSX == MDX

**What do they do?**

1. Display how components are supposed to look / work when applied (JSX)
1. Display documentation (Markdown) on the component (e.g. List properties of the component )

<br>

---

<br>

### Stories found in side nav

Stories are found within the listed components in the side nav. The first level of organization in the left nav are the listed components:

![Image from images folder](~@source/images/storybook/storybook-story/storybook-story-02.png)

The components you see in the screenshot are:

- Button
- Drawer
- Heading
- Link
- Logo

<br>

When you expand a component then you'll see the stories created for that component:

![Image from images folder](~@source/images/storybook/storybook-story/storybook-story-01.png)

The stories that you see for "Button" are:

- Primary
- Secondary
- Large
- Small
