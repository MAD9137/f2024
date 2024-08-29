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
      // {
      //   text: 'Assignments',
      //   link: '/deliverables/assignments/',
      // },
      // {
      //   text: 'Hybrids',
      //   link: '/deliverables/hybrids/',
      // },
    ],
    sidebar: [
      {
        title: 'Week 1',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week1/',
        children: [
          '/modules/week1/1-course-introduction.md',
          '/modules/week1/2-swift-basics.md',
          '/modules/week1/exercises.md'
        ],
      },
      // {
      //   title: 'Week 2',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week2/',
      //   children: [
      //     '/modules/week2/1-strings-collections.md',
      //     '/modules/week2/2-flow-control-and-loops.md',
      //     '/modules/week2/exercises.md'
      //   ]
      // },
      // {
      //   title: 'Week 3',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week3/',
      //   children: [
      //     '/modules/week3/1-optionals.md',
      //     '/modules/week3/2-functions-closures.md',
      //     '/modules/week3/exercises.md'
      //   ],
      // },
      // {
      //   title: 'Week 4',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week4/',
      //   children: [
      //     '/modules/week4/1-classes-structs.md',
      //     '/modules/week4/2-enums-generics.md',
      //     '/modules/week4/exercises.md'
      //   ],
      // },
      // {
      //   title: 'Week 5',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week5/',
      //   children: [
      //     '/modules/week5/1-git-refresh.md',
      //     '/modules/week5/2-swiftUI-basics.md',
      //     '/modules/week5/exercises.md'
      //   ],
      // },
      // {
      //   title: 'Week 6',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week6/',
      //   children: [
      //     '/modules/week6/1-views-modifiers-text-colors-icons.md',
      //     '/modules/week6/2-stacks-and-frames.md',
      //     '/modules/week6/exercises.md'
      //   ],
      // },
      // {
      //   title: 'Week 7',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week7/',
      //   children: [
      //     '/modules/week7/1-swiftUI-controls.md',
      //     '/modules/week7/2-swiftUI-controls.md',
      //     '/modules/week7/exercises.md'
      //   ],
      // },
      // {
      //   title: 'Week 8',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week8/'
      // },
      // {
      //   title: 'Week 9',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week9/',
      //   children: [
      //     '/modules/week9/1-callback-strategies.md',
      //     '/modules/week9/2-async-await-api.md',
      //     '/modules/week9/exercises.md'
      //   ],
      // },
      // {
      //   title: 'Week 10',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week10/',
      //   children: [
      //     '/modules/week10/1-rest-API',
      //     '/modules/week10/2-data-binding.md',
      //     '/modules/week10/exercises.md'
      //   ],
      // },
      // {
      //   title: 'Week 11',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week11/',
      //   children: [
      //     '/modules/week11/1-mapkit.md',
      //     '/modules/week11/2-corelocation.md',
      //     '/modules/week11/exercises.md'
      //   ],
      // },
      // {
      //   title: 'Week 12',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week12/',
      //   children: [
      //     '/modules/week12/1-animation.md',
      //     '/modules/week12/2-mvvm.md',
      //     '/modules/week12/exercises.md'
      //   ],
      // },
      // {
      //   title: 'Week 13',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week13/',
      //   children: [
      //     '/modules/week13/1-firebase-auth.md',
      //     '/modules/week13/2-firebase-database.md',
      //     '/modules/week13/exercises.md'
      //   ],
      // },
      // {
      //   title: 'Week 14',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week14/',
      //   children: [
      //     '/modules/week14/1-firebase-storage.md',
      //     '/modules/week14/2-localization-testing.md',
      //     '/modules/week14/exercises.md'
      //   ],
      // },
      // {
      //   title: 'Week 15',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week15/'
      // },
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
