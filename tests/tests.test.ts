import app from "../src/index";
import supertest from "supertest";
import { number, string } from "joi";
import { Fruit } from "repositories/fruits-repository";


const api = supertest(app)


describe("Teste API", () => {

    it("teste GET /fruits", async () => {
        const result = await api.get('/fruits')
        console.log(result.status)
        expect(result.status).toEqual(200)
        expect(result.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id:expect.any(Number),
                    name: expect.any(String),
                    price: expect.any(Number)
                })
            ])
        )
    })

})
