module.exports = {
  title: 'MAD9137',
  description: 'iOS App Development',
  base: '/f2024/', //used as the root location of the site (repo name)
  // then we can <img :src="$withBase('/foo.png')" alt="foo">
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@root': '/',
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
        text: 'Home',
        link: '/',
      },
      {
        text: 'Overview',
        link: '/overview/',
      },
      {
        text: 'Modules',
        link: '/modules/week1/lecture1.md',
      },
      {
        text: 'Assessments',
        link: '/assessment/',
      },
    ],
    sidebar: [
      {
        title: 'Week 1',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week1/',
        children: [
          '/modules/week1/lecture1.md',
          '/modules/week1/lecture2.md',
          '/modules/week1/exercises.md'
        ],
      },
      {
        title: 'Week 2',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week2/',
        children: [
          '/modules/week2/lecture1.md',
          '/modules/week2/lecture2.md',
          '/modules/week2/exercises.md'
        ]
      },
      {
        title: 'Week 3',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week3/',
        children: [
          '/modules/week3/lecture1.md',
          '/modules/week3/lecture2.md',
          '/modules/week3/exercises.md'
        ],
      },
      {
        title: 'Week 4',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week4/',
        children: [
          '/modules/week4/lecture1.md',
          '/modules/week4/lecture2.md',
          '/modules/week4/exercises.md'
        ],
      },
      {
        title: 'Week 5',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week5/',
        children: [
          '/modules/week5/lecture1.md',
          '/modules/week5/lecture2.md',
          '/modules/week5/exercises.md'
        ],
      },
      {
        title: 'Week 6',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week5/',
        children: [
          '/modules/week6/lecture1.md',
          '/modules/week6/lecture2.md',
          '/modules/week6/exercises.md'
        ],
      },
      {
        title: 'Week 7',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week7/',
        children: [
          '/modules/week7/lecture1.md',
          '/modules/week7/lecture2.md',
          '/modules/week7/exercises.md'
        ],
      },
      {
        title: 'Week 8',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week8/'
      },
      {
        title: 'Week 9',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week9/',
        children: [
          '/modules/week9/lecture1.md',
          '/modules/week9/lecture2.md',
          '/modules/week9/exercises.md'
        ],
      },
      {
        title: 'Week 10',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week10/',
        children: [
          '/modules/week10/lecture1.md',
          '/modules/week10/lecture2.md',
          '/modules/week10/exercises.md'
        ],
      },
      {
        title: 'Week 11',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week11/',
        children: [
          '/modules/week11/lecture1.md',
          '/modules/week11/lecture2.md',
          '/modules/week11/exercises.md'
        ],
      },
      {
        title: 'Week 12',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week12/',
        children: [
          '/modules/week12/lecture1.md',
          '/modules/week12/lecture2.md',
          '/modules/week12/exercises.md'
        ],
      },
      {
        title: 'Week 13',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week13/',
        children: [
          '/modules/week13/lecture1.md',
          '/modules/week13/lecture2.md',
          '/modules/week13/exercises.md'
        ],
      },
      {
        title: 'Week 14',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week14/',
        children: [
          '/modules/week14/lecture1.md',
          '/modules/week14/lecture2.md',
          '/modules/week14/exercises.md'
        ],
      },
      {
        title: 'Week 15',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week15/'
      },
      // {
        // title: 'Deliverables',
        // collapsable: true,
        // sidebarDepth: 2,
        // children: [
          // '/deliverables/assignments/',
          // '/deliverables/hybrids/',
          // '/deliverables/quizzes/',
        // ],
      // },
    ],
  },
  plugins: [
    'vuepress-plugin-mermaidjs'
  ],
}
