module.exports = {
  title: 'MAD9137-F2020',
  description: 'iOS App Development',
  base: '/F2020/', //used as the root location of the site (repo name)
  // then we can <img :src="$withBase('/foo.png')" alt="foo">
  markdown: {
    lineNumbers: true,
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir',
        '@root': '/F2020',
        //![Image from alias](~@alias/image.png)
        // ![Image alt text](~@root/modules/week3/myimg.jpg)
        // images inside /docs/.vuepress/public will be copied to repo root
      },
    },
  },
  themeConfig: {
    lastUpdated: 'Last Updated',
    nextLinks: true,
    prevLinks: true,
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh',
      },
    },
    nav: [
      {
        text: 'Overview',
        link: '/overview/',
      },
      {
        text: 'Deliverables',
        link: '/assessments/',
      },
      {
        text: 'Modules',
        link: '/modules/week1/',
      },
      {
        text: 'Resources',
        link: '/resources/',
      },
    ],
    sidebar: [
      {
        title: 'Content Modules',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          '/modules/week1/',
          '/modules/week2/',
          '/modules/week3/',
          '/modules/week4/',
          '/modules/week5/',
          '/modules/week6/',
          '/modules/week7/',
          '/modules/week8/',
          '/modules/week9/',
          '/modules/week10/',
          '/modules/week11/',
          // '/modules/week12/',
          // '/modules/week13/',
          // '/modules/week14/',
        ],
      },
      {
        title: 'Deliverables',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/assessments/participation/',
          '/assessments/participation/discussion-1.md',
          '/assessments/participation/quiz-1.md',
          '/assessments/assignments/assignment-1.md',
          '/assessments/participation/discussion-2.md',
          '/assessments/assignments/assignment-2.md',
          '/assessments/projects/mid-term.md',
          '/assessments/participation/quiz-2.md',
          '/assessments/assignments/assignment-3.md',
          '/assessments/participation/discussion-3.md',
          '/assessments/assignments/assignment-4.md',
          '/assessments/participation/quiz-3.md',
          
        ],
      },
    ],
  },
};
