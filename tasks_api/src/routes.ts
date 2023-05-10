

import {Router , Request , Response} from 'express'

const routes = Router()

routes.get('/', (resquest:Request, response:Response) => {
    return response.json({message : 'Oh'})
})


export default routes 