import axios from "axios";
const baseUrl = "http://localhost:3001/rankings"

const getAll = () => axios.get(baseUrl)

const rankingsService = { getAll }

export default rankingsService