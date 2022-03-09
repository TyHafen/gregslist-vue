import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class HousesService {
    async getAll() {
        const res = await api.get('api/houses')
        AppState.houses = res.data
        logger.log(res.data)
    }
    async getById(id) {
        const res = await api.get('api/houses/' + id)
        AppState.activeHouse = res.data
        logger.log(res.data)
    }
    async createHouse(houseData) {
        const res = await api.post('api/houses', houseData)
        AppState.houses.push(res.data)
        return res.data
    }
}






export const housesService = new HousesService()