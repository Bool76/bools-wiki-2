import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bool's Wiki 2.0",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Technical Guides', link: '/technical-guides/' },
      { text: 'Other', link: '/other/' }
    ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/technical-guides/': [
        {
          text: 'Technical Guides',
          collapsed: false,
          items: [
            {
              text: "C#",
              collapsed: true,
              link: "/technical-guides/c-sharp/",
              items: [
                {
                  text: "Any Method",
                  link: "/c-sharp/any-method/",
                },
                {
                  text: "Class and Objects",
                  link: "/c-sharp/class-objects/",
                },
                {
                  text: "Constructor",
                  link: "/c-sharp/constructor/",
                },
                {
                  text: "Core MVC",
                  link: "/c-sharp/core-mvc/",
                },
                {
                  text: "List Class",
                  link: "/c-sharp/list-class/",
                },
                {
                  text: "Model View Controller",
                  collapsed: true,
                  link: "/c-sharp/model-view-controller/",
                  items: [
                    {
                      text: "View",
                      link: "/c-sharp/model-view-controller/view/",
                      items: [
                        {
                          text: "Import a Model",
                          link: "/c-sharp/model-view-controller/view/view-import-model/",
                        },
                      ],
                    },
                    {
                      text: "View Model",
                      link: "/c-sharp/model-view-controller/view-model/",
                    },
                    {
                      text: "Controller",
                      link: "/c-sharp/model-view-controller/controller/",
                      items: [
                        {
                          text: "ActionResult + IActionResult",
                          link: "/c-sharp/model-view-controller/controller/actionResult-iactionResult/",
                        },
                      ],
                    },
                    {
                      text: "MVC Example",
                      link: "/c-sharp/model-view-controller/mvc-example/",
                    },
                  ],
                },
                {
                  text: "Namespace",
                  link: "/c-sharp/namespace/",
                },
              ],
            },
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `config` directory.
      '/other/': [
        {
          text: 'Other',
          items: [
            { 
              text: 'Index', 
              link: '/other/' 
            },
            { 
              text: 'Three', 
              link: '/other/one' 
            },
            { 
              text: 'Four', 
              link: '/other/two' 
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
