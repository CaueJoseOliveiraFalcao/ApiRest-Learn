import { getTasks , createTasks } from './controller/TaskController'
import {Router , Request , Response} from 'express'

const routes = Router()

routes.get('/', (resquest:Request, response:Response) => {
    return response.json({message : 'Oh'})
})

routes.get('/tasks' , getTasks);
routes.post('/tasks' , createTasks)

export default routes 