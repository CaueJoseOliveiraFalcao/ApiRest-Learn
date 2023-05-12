import { AppDataSource } from "../index"
import Tasks from "../entity/Tasks"
import { Request,Response } from "express"


export const getTasks = async (request: Request, response:Response) => {
    const tasks = await AppDataSource.manager.find(Tasks)
    return response.json(tasks)
}

export const createTasks = async (request : Request , response: Response) => {
    const taski = new Tasks()
    taski.title = "Me and Bears"
    taski.descripiton = "I am near polar bears"
    await AppDataSource.manager.save(taski)


}