export default {
  widgets: [
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
                  buildHookId: '5f4b1019281ab61edb5f5c8d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-k2fswe8s',
                  apiId: 'e52a3451-2c39-4e08-809d-22c9a4ba1ada'
                },
                {
                  buildHookId: '5f4b1019a08829027c7b08ca',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-33mnd689',
                  apiId: '05679d5b-700f-4f00-81a4-8d599b25b24b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oliverl/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-33mnd689.netlify.app', category: 'apps'}
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
