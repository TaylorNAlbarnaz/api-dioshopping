import { getCustomRepository } from "typeorm";
import { GamesRepository } from "../repository/GamesRepository";

interface IGame {
    name: string;
    release_date: string;
    cover: string;
}

class CreateGameService {
    async execute({name, release_date, cover}: IGame){
        const gameRepository = getCustomRepository(GamesRepository);

        if(!name){
            throw new Error("The name is required!")
        }

        if(!release_date){
            throw new Error("The release date is required!")
        }

        if(!cover){
            throw new Error("The cover image is required!")
        }

        const newGame = gameRepository.create({ name, release_date, cover })

        await gameRepository.save(newGame);

        return newGame;
    }
}

export  { CreateGameService }