import type { NextApiRequest, NextApiResponse } from 'next'
import { database, iProductData } from '../../../database'

export default function handler(_: NextApiRequest, response: NextApiResponse<iProductData[]>) {
	response.status(200).json(database)
}
