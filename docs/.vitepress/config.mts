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
            {
              text: "Chrome",
              collapsed: true,
              link: "/technical-guides/chrome/",
              items: [
                {
                  text: "Dev Tools",
                  collapsed: true,
                  link: "/technical-guides/chrome/dev-tools/",
                  items: [
                    {
                      text: "Move Style Window",
                      link: "/technical-guides/chrome/dev-tools/move-style-window/",
                    }
                  ]
                },
                {
                  text: "Lighthouse",
                  collapsed: true,
                  link: "/technical-guides/chrome/lighthouse/",
                  items: [
                    {
                      text: 'Clear Cache',
                      link: "/technical-guides/chrome/lighthouse/clear-cache/",
                    }
                  ]
                }
              ],
            },
            {
              text: 'Command Line',
              link: '/technical-guides/command-line/'
            },
            {
              text: "CSS",
              link: "/technical-guides/css/",
              collapsed: true,
              items: [
                {
                  text: "Box Model",
                  link: "/technical-guides/css/box-model/",
                },
                {
                  text: "Box-Sizing",
                  link: "/technical-guides/css/box-sizing/",
                },
                {
                  text: "Close Icon",
                  link: "/technical-guides/css/close-icon/",
                },
                {
                  text: "Container Queries",
                  link: "/technical-guides/css/container-queries/",
                },
                {
                  text: "Flexbox",
                  link: "/technical-guides/css/flexbox/",
                  collapsed: true,
                  items: [
                    {
                      text: "Flex Direction",
                      link: "/technical-guides/css/flexbox/flex-direction/",
                    },
                    {
                      text: "Flex Grow",
                      link: "/technical-guides/css/flexbox/flex-grow/",
                    },
                    {
                      text: "Margin Left + Right",
                      link: "/technical-guides/css/flexbox/margin-left-right/",
                    },
                    {
                      text: "Single item per Row",
                      link: "/technical-guides/css/flexbox/flex-single-item-row/",
                    },
                    {
                      text: "Two items per Row",
                      link: "/technical-guides/css/flexbox/flex-two-items-row/",
                    },
                  ],
                },
                {
                  text: "Grid",
                  link: "/technical-guides/css/grid/",
                  collapsed: true,
                  items: [
                    {
                      text: "grid-template-columns",
                      link: "/technical-guides/css/grid/grid-template-columns/"
                    }
                  ]
                },
                {
                  text: "Limit Text Rows",
                  link: "/technical-guides/css/limit-text-rows/",
                },
                {
                  text: "min-width + max-width",
                  link: "/technical-guides/css/min-width-max-width/",
                },
                {
                  text: "Truncate with Ellipsis",
                  link: "/technical-guides/css/truncate-with-ellipsis/",
                },
              ],
            },
            {
              text: "Frontend Development",
              link: "/technical-guides/frontend-development/",
              collapsed: true,
              items: [
                {
                  text: "Accessibility",
                  link: "/technical-guides/frontend-development/accessibility/",
                  collapsed: true,
                  items: [
                    {
                      text: "For Attribute",
                      link: "/technical-guides/frontend-development/accessibility/for-attribute/",
                    },
                  ],
                },
                {
                  text: "Aspect Ratio",
                  link: "/technical-guides/frontend-development/aspect-ratio/",
                },
                {
                  text: "Container Queries",
                  link: "/technical-guides/frontend-development/container-queries/",
                },
                {
                  text: "HTML",
                  link: "/technical-guides/frontend-development/html/",
                  collapsed: true,
                  items: [
                    {
                      text: "Block Elements",
                      link: "/technical-guides/frontend-development/html/block-elements/",
                    },
                    {
                      text: "Focusing Elements",
                      link: "/technical-guides/frontend-development/html/focusing-elements/",
                    },
                    {
                      text: "Video Element",
                      link: "/technical-guides/frontend-development/html/video-element/",
                    },
                  ],
                },
                {
                  text: "Node",
                  link: "/technical-guides/frontend-development/node/",
                  collapsed: true,
                  items: [
                    {
                      text: "nvm",
                      link: "/technical-guides/frontend-development/node/nvm/"
                    }
                  ]
                },
                {
                  text: "Tailwind",
                  link: "/technical-guides/frontend-development/tailwind/",
                },
                {
                  text: "Testing",
                  link: "/technical-guides/frontend-development/testing/",
                },
                {
                  text: "Typescript",
                  link: "/technical-guides/frontend-development/typescript/",
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
