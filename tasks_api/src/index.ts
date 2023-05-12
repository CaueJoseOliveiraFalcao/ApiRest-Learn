import * as express from "express"
import * as bodyParser from "body-parser"
import { DataSource } from "typeorm"
import  Tasks  from "./entity/Tasks"
import routes from "./routes"

const app = express()
//aplicaçao vai trabalhar com json
app.use(bodyParser.json())

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Tasks],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


//aplicação receba as rotas 
app.use(routes)
//porta que a aplicação vai rodar 
app.listen(3333)
