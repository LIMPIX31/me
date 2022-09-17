export default {
  async fetch(request: Request, env: never, ctx: ExecutionContext): Promise<Response> {
    const limpixRepos: any = await fetch('https://api.github.com/users/LIMPIX31/repos', {
      headers: {
        'User-Agent': 'LIMPIX31',
      },
    }).then(v => v.json())
    const nodiumRepos: any = await fetch('https://api.github.com/orgs/NodiumMC/repos', {
      headers: {
        'User-Agent': 'LIMPIX31',
      },
    }).then(v => v.json())
    const repos = [...limpixRepos, ...nodiumRepos].map(v => v.full_name)
    const dependencies = await Promise.all(
      repos.map(v =>
        fetch(`https://raw.githubusercontent.com/${v}/master/package.json`)
          .then(v => v?.json() as any)
          .then(v => {
            if (!v.dependencies && !v.devDependencies) throw new Error('package.json not found')
            else
              return [...Object.keys(v.dependencies ?? []), ...Object.keys(v.devDependencies ?? [])]
          })
          .catch(v => undefined),
      ),
    )
    return new Response(
      JSON.stringify(
        (dependencies.flat().filter(v => v as string) as string[]).reduce(function (acc: any, el) {
          acc[el] = (acc[el] || 0) + 1
          return acc
        }, {}),
      ),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      },
    )
    return new Response('Hi!')
  },
}
