import {Router , Request , Response, response} from 'express'

const routes = Router()

routes.get('/', (request : Request , response: Response) => {
    return response.json({message: 'Hello Word 2'})
})

export default routes
