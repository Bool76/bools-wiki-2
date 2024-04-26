# Flexbox | Margin-Left + Margin-Right

Summary - How to use utilize margin-right and margin-left in relation to aligning items to the left or right

#### Scenario
I was working in a mobile header where I wanted to keep the hamburger menu aligned to the left and shift the account and cart icon to the right. The parent div was set as a FLEX display type, so I couldn't use the old school CSS `float: right`. So how could I do it?

![Image from images folder](~@source/images/frontend-development/flexbox/margin-left-right/margin-right-left_header-example.png)

<br><br>

### Breakdown
1. The parent to the account and cart icon is a `ul` with a display of FLEX
```
.header-mobile {
  display: flex;
  }
```
2. All of the child items inside of that parent become by default "flex-items". This also means that trying to apply `float: right` will not work 
3. To shift those items to the right you have to use
```
.header-mobile li:nth-child(2) {
    margin-left: auto;
  }
```
4. What's happening:
    1. The first `<li>` is the mobile menu so we are bypassing that and targeting the 2nd child
    2. Use `margin-left: auto` on the 2nd `<li>`. Why? A good way to think of it is `margin-left` is applying a margin to the LEFT of the item  
5. See the following example of how there's now a margin to the left of the Account icon:  
![Image from images folder](~@source/images/frontend-development/flexbox/margin-left-right/margin-right-left_margin-left.png)