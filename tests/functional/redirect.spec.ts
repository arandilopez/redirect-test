import { test } from '@japa/runner'
import nock from 'nock'

test.group('Redirect', () => {

  function mockPort80() {
    nock('http://0.0.0.0')
      .get('/')
    .reply(200, () => {
      return { hello: "world" }
    })
  }

  test('redirect works as expected', async ({client}) => {
    mockPort80()

    const response = await client.get('/not-here')

    console.log({response})
    console.log(response.redirects())
  })
})
