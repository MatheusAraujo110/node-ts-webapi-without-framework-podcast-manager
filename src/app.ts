import * as http from "http"
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller"
import { Routes } from "./routes/routes"
import { HttpMethod } from "./utils/http-method"

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    // queryString = query => siginifica consulta. // String => significa texto.
    // http://localhost:3636/api/episode?p=flow => *http://localhost:3636/api/episode => base da minha url, depois queryString "p=flow".

    const baseUrl = request.url?.split("?")[0]

    // listar podcasts
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response)
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPiSODE) {
        await getFilterEpisodes(request, response)
    }
}