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
            {
              text: "Git",
              link: "/technical-guides/git/",
              collapsed: true,
              items: [
                {
                  text: "Add Git",
                  link: "/technical-guides/git/add-git/",
                },
                {
                  text: "Clone Specific Branch",
                  link: "/technical-guides/git/clone-repo-specific-branch/",
                },
                {
                  text: "Commit",
                  link: "/technical-guides/git/commit/",
                },
                {
                  text: "Commit Log",
                  link: "/technical-guides/git/commit-log/",
                },
                {
                  text: "Delete Branch",
                  link: "/technical-guides/git/delete-branch/",
                },
                {
                  text: "Discard File Changes",
                  link: "/technical-guides/git/discard-file-changes/",
                },
                {
                  text: "Exclude",
                  link: "/technical-guides/git/exclude/",
                },
                {
                  text: "Find + Replace",
                  link: "/technical-guides/git/find-replace/",
                },
                {
                  text: "Gitignore",
                  link: "/technical-guides/git/gitignore/",
                },
                {
                  text: "Merge Conflicts",
                  link: "/technical-guides/git/merge-conflicts/",
                },
                {
                  text: "Permission Denied Error",
                  link: "/technical-guides/git/permission-denied-error/",
                },
                {
                  text: "Rebase",
                  link: "/technical-guides/git/rebase/",
                },
                {
                  text: "Rebase Explained",
                  link: "/technical-guides/git/rebase-explained/",
                },
                {
                  text: "Reset",
                  link: "/technical-guides/git/reset/",
                },
                {
                  text: "SSH",
                  link: "/technical-guides/git/ssh/",
                  collapsed: true,
                  items: [
                    {
                      text: "Create SSH Key",
                      link: "/technical-guides/git/ssh/create-ssh-key/",
                    },
                  ],
                },
                {
                  text: "Squash Commits",
                  link: "/technical-guides/git/squash-commits/",
                },
                {
                  text: "Track Branch",
                  link: "/technical-guides/git/track-branch/",
                },
              ],
            },
            {
              text: "Github",
              link: "/technical-guides/github/",
              collapsed: true,
              items: [
                {
                  text: "Add SSH Key",
                  link: "/technical-guides/github/add-ssh-key/",
                },
                {
                  text: "SSH Keys",
                  link: "/technical-guides/github/ssh-keys/",
                },
              ],
            },
            {
              text: "Javascript",
              link: "/technical-guides/javascript/",
              collapsed: true,
              items: [
                {
                  text: "Arrays",
                  link: "/technical-guides/javascript/arrays/",
                },
                {
                  text: "Basics",
                  link: "/technical-guides/javascript/basics/",
                },
                {
                  text: "Functions",
                  link: "/technical-guides/javascript/functions/",
                },
                {
                  text: "Javascript JQuery Book",
                  link: "/technical-guides/javascript/javascript-jquery/",
                },
                {
                  text: "Operators",
                  link: "/technical-guides/javascript/operators/",
                },
                {
                  text: "Variables",
                  link: "/technical-guides/javascript/variables/",
                },
              ],
            },
            {
              text: "Markdown",
              link: "/technical-guides/markdown/",
              collapsed: true,
              items: [
                {
                  text: "Code Block",
                  link: "/technical-guides/markdown/code-block/",
                },
                {
                  text: "Escape HTML tag",
                  link: "/technical-guides/markdown/escape-html-tag/",
                },
                {
                  text: "Footnotes",
                  link: "/technical-guides/markdown/footnotes/",
                },
                {
                  text: "Hyperlink",
                  link: "/technical-guides/markdown/hyperlink/",
                },
                {
                  text: "Insert Image",
                  link: "/technical-guides/markdown/insert-image/",
                },
                {
                  text: "Warning + Notes Message",
                  link: "/technical-guides/markdown/warning-and-notes/",
                },
              ],
            },
            {
              text: "SRAM Dev", 
              link: "/technical-guides/sram-dev/",
              collapsed: true,
              items: [
                {
                  text: "Azure | Deployment",
                  link: "/technical-guides/sram-dev/azure-deployment/",
                },
                {
                  text: "Epi",
                  link: "/technical-guides/sram-dev/epi/",
                  collapsed: true,
                  items: [
                    {
                      text: "Find object",
                      link: "/technical-guides/sram-dev/epi/epi-find-object/",
                    },
                    {
                      text: "Locate Content Instance",
                      link: "/technical-guides/sram-dev/epi/locate-content-instance/",
                    },
                    {
                      text: "Locate Template",
                      link: "/technical-guides/sram-dev/epi/locate-template/",
                    },
                  ],
                },
                {
                  text: "slr2",
                  link: "/technical-guides/sram-dev/slr2/",
                  collapsed: true,
                  items: [
                    {
                      text: "Model View Controller",
                      link: "/technical-guides/sram-dev/slr2/model-view-controller/",
                    },
                    {
                      text: "Start Environment",
                      link: "/technical-guides/sram-dev/slr2/start-environment/",
                    },
                    {
                      text: "Test Custom Javascript",
                      link: "/technical-guides/sram-dev/slr2/test-custom-js/",
                    },
                    {
                      text: "URL and PubID",
                      link: "/technical-guides/sram-dev/slr2/url-and-pubId/",
                    },
                  ],
                },
                {
                  text: "Sramconnect",
                  link: "/technical-guides/sram-dev/sramconnect/",
                  collapsed: true,
                  items: [
                    {
                      text: "Compile C#",
                      link: "/technical-guides/sram-dev/sramconnect/compile-c-sharp/",
                    },
                    {
                      text: "Compile chtml",
                      link: "/technical-guides/sram-dev/sramconnect/compile-chtml/",
                    },
                    {
                      text: "Compile CSS+JS",
                      link: "/technical-guides/sram-dev/sramconnect/compile-css/",
                    },
                    {
                      text: "Debug",
                      link: "/technical-guides/sram-dev/sramconnect/debug/",
                    },
                    {
                      text: "Environment",
                      link: "/technical-guides/sram-dev/sramconnect/start-environment/",
                    },
                  ], // optional, defaults to 0, defines the index of initially opened subgroup
                },
                {
                  text: "Sram-ui",
                  link: "/technical-guides/sram-dev/sram-ui/",
                  collapsed: true,
                  items: [
                    {
                      text: "Display Code Changes",
                      link: "/technical-guides/sram-dev/sram-ui/display-code-changes/",
                    },
                    {
                      text: "Frontend Pipeline",
                      link: "/technical-guides/sram-dev/sram-ui/frontend-pipeline/",
                    },
                    {
                      text: "Install Package",
                      link: "/technical-guides/sram-dev/sram-ui/install-package/",
                    },
                    {
                      text: "Start Environment",
                      link: "/technical-guides/sram-dev/sram-ui/start-environment/",
                    },
                  ],
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
