export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62c4994591bbb41eff1ab35b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cjjxmxpj',
                  apiId: '8de169a5-1e95-4380-b750-be79395d4bc2'
                },
                {
                  buildHookId: '62c49945ddfe5b1fee84f3f1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qw91nobr',
                  apiId: '8a12d58c-d0a0-423c-a538-8956bf4ed346'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/francisuloko/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qw91nobr.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
