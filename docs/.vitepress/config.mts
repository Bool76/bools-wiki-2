import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bool's Wiki 2.0",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Technical Guides", link: "/technical-guides/" },
      { text: "Other", link: "/other/" },
    ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      "/technical-guides/": [
        {
          text: "Technical Guides",
          collapsed: false,
          items: [
            {
              text: "C#",
              collapsed: true,
              link: "/technical-guides/c-sharp/",
              items: [
                {
                  text: "Any Method",
                  link: "/technical-guides/c-sharp/any-method/",
                },
                {
                  text: "Class and Objects",
                  link: "/technical-guides/c-sharp/class-objects/",
                },
                {
                  text: "Constructor",
                  link: "/technical-guides/c-sharp/constructor/",
                },
                {
                  text: "Core MVC",
                  link: "/technical-guides/c-sharp/core-mvc/",
                  items: [
                    {
                      text: "Controllers",
                      link: "/technical-guides/c-sharp/core-mvc/controllers",
                    },
                  ],
                },
                {
                  text: "List Class",
                  link: "/technical-guides/c-sharp/list-class/",
                },
                {
                  text: "Model View Controller",
                  collapsed: true,
                  link: "/technical-guides/c-sharp/model-view-controller/",
                  items: [
                    {
                      text: "View",
                      link: "/technical-guides/c-sharp/model-view-controller/view/",
                      items: [
                        {
                          text: "Import a Model",
                          link: "/technical-guides/c-sharp/model-view-controller/view/view-import-model/",
                        },
                      ],
                    },
                    {
                      text: "View Model",
                      link: "/technical-guides/c-sharp/model-view-controller/view-model/",
                    },
                    {
                      text: "Controller",
                      link: "/technical-guides/c-sharp/model-view-controller/controller/",
                      items: [
                        {
                          text: "ActionResult + IActionResult",
                          link: "/technical-guides/c-sharp/model-view-controller/controller/actionResult-iactionResult/",
                        },
                      ],
                    },
                    {
                      text: "MVC Example",
                      link: "/technical-guides/c-sharp/model-view-controller/mvc-example/",
                    },
                  ],
                },
                {
                  text: "Namespace",
                  link: "/technical-guides/c-sharp/namespace/",
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
                    },
                  ],
                },
                {
                  text: "Lighthouse",
                  collapsed: true,
                  link: "/technical-guides/chrome/lighthouse/",
                  items: [
                    {
                      text: "Clear Cache",
                      link: "/technical-guides/chrome/lighthouse/clear-cache/",
                    },
                  ],
                },
              ],
            },
            {
              text: "Command Line",
              link: "/technical-guides/command-line/",
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
                  text: "Create Circle",
                  link: "/technical-guides/css/css-create-circle",
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
                      link: "/technical-guides/css/grid/grid-template-columns/",
                    },
                  ],
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
              text: "Elasticsearch",
              link: "/technical-guides/elasticsearch/",
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
                  text: "Bootstrap",
                  link: "/technical-guides/frontend-development/bootstrap",
                  collapsed: true,
                  items: [
                    {
                      text: "Breakpoints",
                      link: "/technical-guides/frontend-development/bootstrap/bootstrap-breakpoints",
                    },
                    {
                      text: "Margins + Padding",
                      link: "/technical-guides/frontend-development/bootstrap/bootstrap-margins-padding",
                    },
                  ],
                },
                {
                  text: "Build Tools",
                  link: "/technical-guides/frontend-development/build-tools/",
                },
                {
                  text: "Flexbox",
                  link: "/technical-guides/frontend-development/flexbox",
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
                      text: "getElementsByClassName",
                      link: "/technical-guides/frontend-development/html/get-elements-by-class-name",
                    },
                    {
                      text: "HTMLCollection",
                      link: "/technical-guides/frontend-development/html/html-collection",
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
                      link: "/technical-guides/frontend-development/node/nvm/",
                    },
                  ],
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
                  text: "Create Environment",
                  link: "/technical-guides/javascript/environment/",
                },
                {
                  text: "DOM",
                  link: "/technical-guides/javascript/dom/",
                },
                {
                  text: "For Loops",
                  link: "/technical-guides/javascript/javascript-for-loop",
                },
                {
                  text: "Functions",
                  link: "/technical-guides/javascript/functions/",
                },
                {
                  text: "Javascript Book",
                  link: "/technical-guides/javascript/javascript-jquery/",
                  collapsed: true,
                  items: [
                    {
                      text: "Ch 5 | DOM",
                      link: "/technical-guides/javascript/javascript-jquery/javascript-jquery-ch5",
                    },
                  ],
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
                  text: "Indent",
                  link: "/technical-guides/markdown/indent",
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
              text: "Project Management",
              link: "/technical-guides/pm/",
              collapsed: true,
              items: [
                {
                  text: "Templates",
                  link: "/technical-guides/pm/pm-templates/",
                  items: [
                    {
                      text: "Assumptions Log",
                      link: "/technical-guides/pm/pm-templates/templates-assumptions-log/",
                    },
                    {
                      text: "Decisions",
                      link: "/technical-guides/pm/pm-templates/templates-decisions/",
                    },
                    {
                      text: "Launch Communication",
                      link: "/technical-guides/pm/pm-templates/templates-launch-communication/",
                    },
                    {
                      text: "Meetings",
                      link: "/technical-guides/pm/pm-templates/templates-meetings/",
                    },
                    {
                      text: "Risk Register",
                      link: "/technical-guides/pm/pm-templates/templates-risk-register/",
                    },
                    {
                      text: "Stakeholder Register",
                      link: "/technical-guides/pm/pm-templates/templates-stakeholder-register/",
                    },
                    {
                      text: "Team Charter",
                      link: "/technical-guides/pm/pm-templates/templates-team-charter/",
                    },
                  ],
                },
              ],
            },
            {
              text: "PMP",
              link: "/technical-guides/pmp/",
              collapsed: true,
              items: [
                {
                  text: "Agile",
                  link: "/technical-guides/pmp/agile/",
                  collapsed: true,
                  items: [
                    {
                      text: "Agile Key Concepts",
                      link: "/technical-guides/pmp/agile/agile-key-concepts/",
                    },
                    {
                      text: "Ceremonies + Reports + Tools",
                      link: "/technical-guides/pmp/agile/ceremonies-reports-tools/",
                    },
                    {
                      text: "Agile Stages",
                      link: "/technical-guides/pmp/agile/agile-stages/",
                      collapsed: true,
                      items: [
                        {
                          text: "Agile Project Initiation",
                          link: "/technical-guides/pmp/agile/agile-stages/agile-project-initiation/",
                        },
                        {
                          text: "Agile Planning",
                          link: "/technical-guides/pmp/agile/agile-stages/agile-planning/",
                        },
                      ],
                    },
                    {
                      text: "Agile Types",
                      link: "/technical-guides/pmp/agile/agile-types/",
                      collapsed: true,
                      items: [
                        {
                          text: "Scrum",
                          link: "/technical-guides/pmp/agile/agile-types/scrum/",
                        },
                        {
                          text: "Kanban",
                          link: "/technical-guides/pmp/agile/agile-types/kanban/",
                        },
                      ],
                    },
                  ],
                },
                {
                  text: "Predictive",
                  link: "/technical-guides/pmp/predictive/",
                  collapsed: true,
                  items: [
                    {
                      text: "Phases",
                      link: "/technical-guides/pmp/predictive/phases/",
                      collapsed: true,
                      items: [
                        {
                          text: "Initalize",
                          link: "/technical-guides/pmp/predictive/phases/initalize/",
                        },
                        {
                          text: "Build",
                          link: "/technical-guides/pmp/predictive/phases/planning/",
                          collapsed: true,
                          items: [
                            {
                              text: "Build a Team",
                              link: "/technical-guides/pmp/predictive/phases/build/build-a-team/",
                            },
                          ],
                        },
                        {
                          text: "Planning",
                          link: "/technical-guides/pmp/predictive/phases/planning/",
                          collapsed: true,
                          items: [
                            {
                              text: "Requirements",
                              link: "/technical-guides/pmp/predictive/phases/planning/requirements/",
                            },
                            {
                              text: "Schedule",
                              link: "/technical-guides/pmp/predictive/phases/planning/schedule/",
                            },
                            {
                              text: "Cost Management",
                              link: "/technical-guides/pmp/predictive/phases/planning/cost-management/",
                            },
                            {
                              text: "Cost Estimates",
                              link: "/technical-guides/pmp/predictive/phases/planning/cost-estimates/",
                            },
                            {
                              text: "Determine Budget",
                              link: "/technical-guides/pmp/predictive/phases/planning/determine-budget/",
                            },
                            {
                              text: "Control Costs",
                              link: "/technical-guides/pmp/predictive/phases/planning/control-costs/",
                            },
                            {
                              text: "Earned Value",
                              link: "/technical-guides/pmp/predictive/phases/planning/earned-value/",
                            },
                            {
                              text: "Configuration",
                              link: "/technical-guides/pmp/predictive/phases/planning/configuration/",
                            },
                            {
                              text: "Quality",
                              link: "/technical-guides/pmp/predictive/phases/planning/quality/",
                            },
                            {
                              text: "Procurement",
                              link: "/technical-guides/pmp/predictive/phases/planning/procurement/",
                            },
                            {
                              text: "Integration",
                              link: "/technical-guides/pmp/predictive/phases/planning/integration/",
                            },
                          ],
                        },
                        {
                          text: "Execute",
                          link: "/technical-guides/pmp/predictive/phases/execute/",
                          collapsed: true,
                          items: [
                            {
                              text: "Change",
                              link: "/technical-guides/pmp/predictive/phases/execute/change/",
                            },
                            {
                              text: "Communcation",
                              link: "/technical-guides/pmp/predictive/phases/execute/communication/",
                            },
                            {
                              text: "Risk",
                              link: "/technical-guides/pmp/predictive/phases/execute/risk/",
                            },
                            {
                              text: "Stakeholder Engagement",
                              link: "/technical-guides/pmp/predictive/phases/execute/stakeholder-engagement/",
                            },
                          ],
                        },
                        {
                          text: "Monitor",
                          link: "/technical-guides/pmp/predictive/phases/monitor/",
                          collapsed: true,
                          items: [
                            {
                              text: "Conflicts",
                              link: "/technical-guides/pmp/predictive/phases/monitor/conflicts/",
                            },
                            {
                              text: "Lead a Team",
                              link: "/technical-guides/pmp/predictive/phases/monitor/lead-a-team/",
                            },
                            {
                              text: "Remove Blockers",
                              link: "/technical-guides/pmp/predictive/phases/monitor/remove-blockers/",
                            },
                            {
                              text: "Team Performance",
                              link: "/technical-guides/pmp/predictive/phases/monitor/team-performance/",
                            },
                          ],
                        },
                        {
                          text: "Grow",
                          link: "/technical-guides/pmp/predictive/phases/grow/",
                          collapsed: true,
                          items: [
                            {
                              text: "Benefits + Value",
                              link: "/technical-guides/pmp/predictive/phases/grow/benefits-value/",
                            },
                            {
                              text: "Compliance",
                              link: "/technical-guides/pmp/predictive/phases/grow/compliance/",
                            },
                            {
                              text: "Organizational Change",
                              link: "/technical-guides/pmp/predictive/phases/grow/org-change/",
                            },
                          ],
                        },
                        {
                          text: "Close the Project",
                          link: "/technical-guides/pmp/predictive/phases/close/",
                        },
                      ],
                    },
                    {
                      text: "Plans + Documents + Tools",
                      link: "/technical-guides/pmp/predictive/plans-documents-tools/",
                    },
                    {
                      text: "Calculations",
                      link: "/technical-guides/pmp/predictive/calculations/",
                    },
                  ],
                },
                {
                  text: "Situational Strategies",
                  link: "/technical-guides/pmp/situational-strategies/",
                  collapsed: true,
                  items: [
                    {
                      text: "Methodology Strategies",
                      link: "/technical-guides/pmp/situational-strategies/methodology-strategies/",
                    },
                    {
                      text: "Planning Strategies",
                      link: "/technical-guides/pmp/situational-strategies/planning-strategies/",
                    },
                    {
                      text: "Requirements Strategies",
                      link: "/technical-guides/pmp/situational-strategies/requirements-strategies/",
                    },
                    {
                      text: "Team Strategies",
                      link: "/technical-guides/pmp/situational-strategies/team-strategies/",
                    },
                    {
                      text: "Stakeholder Strategies",
                      link: "/technical-guides/pmp/situational-strategies/stakeholder-strategies/",
                    },
                    {
                      text: "Risk Strategies",
                      link: "/technical-guides/pmp/situational-strategies/risk-strategies/",
                    },
                    {
                      text: "Quality Strategies",
                      link: "/technical-guides/pmp/situational-strategies/quality-strategies/",
                    },
                    {
                      text: "Close Project Strategies",
                      link: "/technical-guides/pmp/situational-strategies/close-project-strategies/",
                    },
                  ],
                },
                {
                  text: "Terms and Definitions",
                  link: "/technical-guides/pmp/pmp-terms/",
                  collapsed: true,
                  items: [
                    {
                      text: "Lead Time",
                      link: "/technical-guides/pmp/pmp-terms/lead-time",
                    },
                  ]
                },
                {
                  text: "Test Question Strategies",
                  link: "/technical-guides/pmp/test-question-strategies/",
                },
                {
                  text: "Concepts to Remember",
                  link: "/technical-guides/pmp/concepts-to-remember/",
                },
              ],
            },
            {
              text: "SCSS",
              link: "/technical-guides/scss/",
              collapsed: true,
              items: [
                {
                  text: "Media Query",
                  link: "/technical-guides/scss/media-query/",
                },
                {
                  text: "Psuedo Elements",
                  link: "/technical-guides/scss/psuedo-elements/",
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
                  text: "Credit Card",
                  link: "/technical-guides/sram-dev/credit-card-expenses",
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
                    {
                      text: "Template List",
                      link: "/technical-guides/sram-dev/epi/epi-template-list",
                    },
                  ],
                },
                {
                  text: "IT Installs + Upgrades",
                  link: "/technical-guides/sram-dev/it-installs-upgrades",
                },
                {
                  text: "Rider Support Tools",
                  link: "/technical-guides/sram-dev/rider-support-tools/",
                  collapsed: true,
                  items: [
                    {
                      text: "Deploy",
                      link: "/technical-guides/sram-dev/rider-support-tools/rider-support-deploy",
                    },
                    {
                      text: "Run from Local Sramconnect",
                      link: "/technical-guides/sram-dev/rider-support-tools/run-from-local-sramconnect",
                    },
                    {
                      text: "Run Test Cases",
                      link: "/technical-guides/sram-dev/rider-support-tools/rider-support-run-tests",
                    },
                    {
                      text: "Start Environment",
                      link: "/technical-guides/sram-dev/rider-support-tools/rider-support-start-env",
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
                      text: "3-Up Content Block Examples",
                      link: "/technical-guides/sram-dev/sramconnect/3-up-content-block-examples",
                    },
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
                      text: "Create CMS Block",
                      link: "/technical-guides/sram-dev/sramconnect/create-cs-block",
                    },
                    {
                      text: "Debug",
                      link: "/technical-guides/sram-dev/sramconnect/debug/",
                    },
                    {
                      text: "Environment",
                      link: "/technical-guides/sram-dev/sramconnect/start-environment/",
                    },
                    {
                      text: "Rider Support Tools",
                      link: "/technical-guides/sram-dev/sramconnect/sramconnect-rider-support-tools/",
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
                {
                  text: "Time Off",
                  link: "/technical-guides/sram-dev/sram-time-off",
                },
              ],
            },
            {
              text: "Storybook",
              link: "/technical-guides/storybook/",
              collapsed: true,
              items: [
                {
                  text: "Arguments",
                  link: "/technical-guides/storybook/arguments/",
                },
                {
                  text: "Doc Blocks",
                  link: "/technical-guides/storybook/doc-blocks/",
                  collapsed: true,
                  items: [
                    {
                      text: "Canvas Block",
                      link: "/technical-guides/storybook/doc-blocks/canvas-block/",
                    },
                    {
                      text: "Meta Block",
                      link: "/technical-guides/storybook/doc-blocks/meta-block/",
                    },
                    {
                      text: "Source Block",
                      link: "/technical-guides/storybook/doc-blocks/source-block/",
                    },
                    {
                      text: "Story Block",
                      link: "/technical-guides/storybook/doc-blocks/story-block/",
                    },
                  ],
                },
                {
                  text: "Importing JSON",
                  link: "/technical-guides/storybook/importing-json/",
                },
                {
                  text: "Story",
                  link: "/technical-guides/storybook/storybook-story/",
                },
                {
                  text: "Vue Slots",
                  link: "/technical-guides/storybook/vue-slots/",
                },
              ],
            },
            {
              text: "Visual Studio",
              link: "/technical-guides/visual-studio/",
              collapsed: true,
              items: [
                {
                  text: "Screenshot Not Working",
                  link: "/technical-guides/visual-studio/visual-studio-screenshot",
                },
              ],
            },
            {
              text: "Vitepress",
              link: "/technical-guides/vitepress/",
              collapsed: true,
              items: [
                {
                  text: "Ignore Build Files",
                  link: "/technical-guides/vitepress/ignore-build-files",
                },
                {
                  text: "Insert Image",
                  link: "/technical-guides/vitepress/vitepress-insert-image",
                },
                {
                  text: "Install Existing Site",
                  link: "/technical-guides/vitepress/vitepress-install-existing-site",
                },
                {
                  text: "Vitepress Theming",
                  link: "/technical-guides/vitepress/vitepress-theming/",
                },
              ],
            },
            {
              text: "VS Code",
              link: "/technical-guides/vscode/",
              collapsed: true,
              items: [
                {
                  text: "Code Wrap",
                  link: "/technical-guides/vscode/code-wrap/",
                },
                {
                  text: "Debugging",
                  link: "/technical-guides/vscode/debugging/",
                },
                {
                  text: "Eslint + Prettier",
                  link: "/technical-guides/vscode/eslint-prettier/",
                },
                {
                  text: "Eslint",
                  link: "/technical-guides/vscode/eslint/",
                },
                {
                  text: "Formatting",
                  link: "/technical-guides/vscode/vscode-formatting",
                },
                {
                  text: "Merge Conflicts",
                  link: "/technical-guides/vscode/merge-conflicts/",
                },
                {
                  text: "Prettier",
                  link: "/technical-guides/vscode/prettier/",
                },
                {
                  text: "Shortcuts",
                  link: "/technical-guides/vscode/shortcuts/",
                },
              ],
            },
            {
              text: "Vue",
              link: "/technical-guides/vue/",
              collapsed: true,
              items: [
                {
                  text: "Basics",
                  link: "/technical-guides/vue/vue-basics/",
                },
                {
                  text: "Components",
                  link: "/technical-guides/vue/vue-components/",
                },
                {
                  text: "Container Queries",
                  link: "/technical-guides/vue/container-queries/",
                },
                {
                  text: "Codevolution Class",
                  link: "/technical-guides/vue/codevolution/",
                  items: [
                    {
                      text: "Tutorial 3 Notes",
                      link: "/technical-guides/vue/codevolution/codevolution-tutorial-3",
                    },
                    {
                      text: "Tutorial 4 Notes",
                      link: "/technical-guides/vue/codevolution/codevolution-tutorial-4",
                    },
                    {
                      text: "Tutorial 5 Notes",
                      link: "/technical-guides/vue/codevolution/codevolution-tutorial-5",
                    },
                    {
                      text: "Tutorial 6 Notes",
                      link: "/technical-guides/vue/codevolution/codevolution-tutorial-6",
                    },
                    {
                      text: "Tutorial 7 Notes",
                      link: "/technical-guides/vue/codevolution/codevolution-tutorial-7",
                    },
                  ],
                },
                {
                  text: "Custom Props",
                  link: "/technical-guides/vue/custom-props/",
                },
                {
                  text: "Custom Prop Inheritance",
                  link: "/technical-guides/vue/custom-prop-inheritance/",
                },
                {
                  text: "Directives",
                  link: "/technical-guides/vue/directives/",
                },
                {
                  text: "Nuxt",
                  link: "/technical-guides/vue/nuxt/",
                },
                {
                  text: "Ref() + Reactive()",
                  link: "/technical-guides/vue/ref-n-reactive/",
                },
                {
                  text: "slots",
                  link: "/technical-guides/vue/slots/",
                },
                {
                  text: "variables",
                  link: "/technical-guides/vue/variables/",
                },
                {
                  text: "v-bind",
                  link: "/technical-guides/vue/v-bind/",
                },
                {
                  text: "v-model",
                  link: "/technical-guides/vue/v-model/",
                },
                {
                  text: "Vue File Types",
                  link: "/technical-guides/vue/vue-file-types/",
                },
              ],
            },
            {
              text: "VuePress",
              link: "/technical-guides/vue-press/",
              collapsed: true,
              items: [
                {
                  text: "VuePress Styling",
                  link: "/technical-guides/vue-press/vue-press-styling/",
                },
              ],
            },
          ],
        },
      ],
      "/other/": [
        {
          text: "Other",
          items: [
            {
              text: "Career",
              link: "/other/career/",
              collapsed: true,
              items: [
                {
                  text: "Project Management Journal",
                  link: "/other/career/pm-journal/",
                  collapsed: true,
                  items: [
                    {
                      text: "Project 1",
                      link: "/other/career/pm-journal/project-1/",
                      collapsed: true,
                      items: [
                        {
                          text: "Lessons Learned",
                          link: "/other/career/pm-journal/project-1/lessons-learned/",
                        },
                        {
                          text: "2024-01-02",
                          link: "/other/career/pm-journal/project-1/p1-2024-01-02/",
                        },
                        {
                          text: "2023-11-30",
                          link: "/other/career/pm-journal/project-1/p1-2023-11-30/",
                        },
                        {
                          text: "2023-11-21",
                          link: "/other/career/pm-journal/project-1/p1-2023-11-21/",
                        },
                        {
                          text: "2023-11-09",
                          link: "/other/career/pm-journal/project-1/p1-2023-11-09/",
                        },
                        {
                          text: "2023-11-06",
                          link: "/other/career/pm-journal/project-1/p1-2023-11-06/",
                        },
                        {
                          text: "2023-10-30",
                          link: "/other/career/pm-journal/project-1/p1-2023-10-30/",
                        },
                        {
                          text: "2023-10-26",
                          link: "/other/career/pm-journal/project-1/p1-2023-10-26/",
                        },
                      ],
                    },
                    {
                      text: "Project 2",
                      link: "/other/career/pm-journal/project-2/",
                      collapsed: true,
                      items: [
                        {
                          text: "Lessons Learned",
                          link: "/other/career/pm-journal/project-2/lessons-learned/",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              text: "Music",
              link: "/other/music/",
              collapsed: true,
              items: [
                {
                  text: "Chord Progressions",
                  link: "/other/music/chord-progressions/",
                },
                {
                  text: "Vocal Range",
                  link: "/other/music/vocal-range/",
                },
              ],
            },
            {
              text: "Project Jewel",
              link: "/other/project-jewel/",
              collapsed: true,
              items: [
                {
                  text: "2024",
                  link: "/other/project-jewel/2024/",
                  items: [
                    {
                      text: "2024 Breakout",
                      link: "/other/project-jewel/2024/2024-breakout",
                    },
                  ],
                },
                {
                  text: "2025",
                  link: "/other/project-jewel/2025/",
                  items: [
                    {
                      text: "Machine Mode",
                      link: "/other/project-jewel/2025/2025-machine",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
