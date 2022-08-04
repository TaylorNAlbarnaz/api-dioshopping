import { getCustomRepository } from "typeorm";
import { GamesRepository } from "../repository/GamesRepository";

class ListGameService{
    async execute(){
        const gamesRepository = getCustomRepository(GamesRepository);

        const allGames = await gamesRepository.find();

        return allGames
    }
}

export { ListGameService }
