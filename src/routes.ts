import { Router }from "express"
import AlunoRouter from "./controllers/alunoController"

class Routes {
    static define(router: Router): Router {
        router.use('/alunos', AlunoRouter)

        return router
    }
}

export default Routes.define(Router());