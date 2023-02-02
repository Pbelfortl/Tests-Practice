import app from "../src/index";
import supertest from "supertest";


const api = supertest(app)


describe("Teste API", () => {

    it("teste GET /fruits", async () => {
        const result = await api.get('/fruits')
        console.log(result.status)
        expect(result.status).toBe(200)
    })
})
