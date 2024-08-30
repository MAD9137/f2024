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
        link: '/modules/week1/1-course-introduction.md',
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
    ],
  },
  plugins: [
    'vuepress-plugin-mermaidjs'
  ],
}
