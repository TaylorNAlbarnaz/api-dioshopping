import { Router, Request, Response } from "express";
import { CreateGameController } from "./controllers/CreateGameController";
import { ListGameController } from "./controllers/ListGameController";

const router = Router();

const createGameController = new CreateGameController();
const listGameController = new ListGameController();

router.get('/', (request: Request, response: Response) => {
    return response.json(
        {
            message: 'Bem vindo a API para listagem de jogos da franquia Grand Theft Auto',
            hint: 'Utilize a rota /gamelist para ver e adicionar jogos a lista'
        }
    )
})

router.get('/gamelist', listGameController.handle)
router.post('/gamelist', createGameController.handle)

export { router }
