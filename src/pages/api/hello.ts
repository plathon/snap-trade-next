import type { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse): void => {
  response.status(200).json({ name: 'John Doe' })
}
