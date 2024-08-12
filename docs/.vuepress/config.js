module.exports = {
  title: 'MAD9137',
  description: 'iOS App Development',
  base: '/MAD9137-notes/', //used as the root location of the site (repo name)
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
        link: '/modules/week4/',
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
          '/modules/week1/course-introduction.md',
          '/modules/week1/developing-with-apple.md',
          '/modules/week1/xcode.md',
          '/modules/week1/basic-tour-of-xcode.md',
          '/modules/week1/customizing-xcode.md',
          '/modules/week1/xcode-cloud.md',
          '/modules/week1/swift-playgrounds.md',
          '/modules/week1/app-store-connect.md',
          '/modules/week1/creating-playgrounds.md',
          '/modules/week1/exercise-1.md'
        ],
      },
      {
        title: 'Week 2',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week2/',
        children: [
          '/modules/week2/swift-introduction.md',
          '/modules/week2/swift-basics.md',
          '/modules/week2/swift-collections.md',
          '/modules/week2/swift-operators.md',
          '/modules/week2/swift-control-flow.md',
          '/modules/week2/working-with-swift-strings.md',
          '/modules/week2/exercise-2.md',
          '/modules/week2/exercise-3.md',
          '/modules/week2/exercise-4.md',
          '/modules/week2/exercise-5.md',
        ]
      },
      {
        title: 'Week 3',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week3/',
        children: [
          '/modules/week3/functions.md',
          '/modules/week3/enumerations.md',
          '/modules/week3/optionals.md',
          '/modules/week3/structures-and-classes.md',
          '/modules/week3/protocols.md',
          '/modules/week3/closure-expressions.md',
          '/modules/week3/exercise-6.md',
          '/modules/week3/exercise-7.md',
          '/modules/week3/exercise-8.md',
          '/modules/week3/exercise-9.md',
          '/modules/week3/exercise-10.md',
        ]
      },
      {
        title: 'Week 4',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week4/',
        children: [
          '/modules/week4/exercise-11.md',
          '/modules/week4/xcode-projects.md',
          '/modules/week4/simulator.md',
          '/modules/week4/swiftui-views.md',
          '/modules/week4/layout-views.md',
          '/modules/week4/text-views.md',
          '/modules/week4/controls.md'
        ]
      },
      {
        title: 'Week 5',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week5/',
        children: [
          '/modules/week5/exercise-2.md'
        ]
      },
      // {
      //   title: 'Week 6',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week6/',
      //   children: [
      //     '/modules/week6/navigation.md',
      //     '/modules/week6/model-data-and-property-wrappers.md',
      //     '/modules/week6/checking-api-availability.md'
      //   ]
      // },
      // {
      //   title: 'Week 7',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week7/',
      //   children: [
      //     '/modules/week7/hybrid-homework.md',
      //     '/modules/week7/a1-rgb-color-app.md',
      //     '/modules/week7/device-orientation.md'
      //   ]
      // },
      {
        title: 'Week 8',
        collapsable: true,
        sidebarDepth: 1,
        path: '/modules/week8/'
      },
      // {
      //   title: 'Week 9',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week9/',
      //   children: [
      //     '/modules/week9/hybrid-homework.md',
      //     '/modules/week9/getrgbacolor-method-for-a1.md',
      //     '/modules/week9/a1-rgb-color-app.md'
      //   ]
      // },
      // {
      //   title: 'Week 10',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week10/',
      //   children: [
      //     '/modules/week10/swift-package-manager.md',
      //     '/modules/week10/gestures.md',
      //     '/modules/week10/presentation-modifiers.md'
      //   ]
      // },
      // {
      //   title: 'Week 11',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week11/',
      //   children: [
      //     '/modules/week11/hybrid-homework.md',
      //     '/modules/week11/monitoring-network-connectivity-changes.md',
      //     '/modules/week11/observable-objects.md',
      //     '/modules/week11/unsplash-api.md'
      //   ]
      // },
      // {
      //   title: 'Week 12',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week12/',
      //   children: [
      //     '/modules/week12/.md',
      //     '/modules/week12/.md',
      //     '/modules/week12/.md',
      //     '/modules/week12/.md',
      //     '/modules/week12/.md',
      //     '/modules/week12/.md'
      //   ]
      // },
      // {
      //   title: 'Week 13',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week13/',
      //   children: [
      //     '/modules/week13/.md',
      //     '/modules/week13/.md',
      //     '/modules/week13/.md',
      //     '/modules/week13/.md',
      //     '/modules/week13/.md',
      //     '/modules/week13/.md'
      //   ]
      // },
      // {
      //   title: 'Week 14',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week14/',
      //   children: [
      //     '/modules/week14/.md',
      //     '/modules/week14/.md',
      //     '/modules/week14/.md',
      //     '/modules/week14/.md',
      //     '/modules/week14/.md',
      //     '/modules/week14/.md'
      //   ]
      // },
      // {
      //   title: 'Week 15',
      //   collapsable: true,
      //   sidebarDepth: 1,
      //   path: '/modules/week15/',
      //   children: [
      //     '/modules/week15/.md',
      //     '/modules/week15/.md',
      //     '/modules/week15/.md',
      //     '/modules/week15/.md',
      //     '/modules/week15/.md',
      //     '/modules/week15/.md'
      //   ]
      // }
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
    // 'vuepress-plugin-mermaidjs'
  ],
}