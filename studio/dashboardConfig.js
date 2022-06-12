export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '62a61a8620401202a9f5b6fb',
                  title: 'Sanity Studio',
                  name: 'briantschu-sanity-eleventy-studio',
                  apiId: 'd94f27a3-ebd5-476d-88e2-c99aabe48d5b'
                },
                {
                  buildHookId: '62a61a87e07484049f7d1475',
                  title: 'Blog Website',
                  name: 'briantschu-sanity-eleventy',
                  apiId: '5f8de0b3-3e62-40be-bbfb-547b85e83b04'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/briantschu/briantschu-sanity-eleventy',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://briantschu-sanity-eleventy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
