const request = require('supertest')
const mongoose = require('mongoose')

process.env.mongoUrl = process.env.mongoUrl || 'mongodb://localhost:27017/test'

const app = require('../../app')

describe('Sanity test express', () => {
  it('should boot up!', async () => {
    const response = await request(app).get('/')

    expect(response.statusCode).toEqual(200)
  })
})

describe('get all wishes', () => {
  it('returns a list of all wishes', async () => {
    const getAllWishesResponse = await request(app)
    .get('/wish/getwishes')

    expect(getAllWishesResponse.statusCode).toEqual(200)
  })
})

describe('find a wish by values', () => {
  describe('by firstname', () => {
    it('returns all wishes by matching firstname', async () => {
      const getWishByNameResponse = await request(app)
      .get('/wish/findwish/x')

      expect(getWishByNameResponse.statusCode).toEqual(200)
    })
  })
  describe('by hometown', () => {
    it('returns all wishes by matching hometown', async () => {
      const getWishByHometownResponse = await request(app)
      .get('/wish/findwish/Atlanta')

      expect(getWishByHometownResponse.statusCode).toEqual(200)
    })
  })
  describe('bad path', () => {
    // beforeEach(() =>{
    //   jest.mock('express', () =>{
    //     get: jest.fn(() => Promise.reject())
    //   })
    // })

    // it('returns 500 when request errors', async () => {
    //   const badGetWishByValueResponse = await request(app)
    //   .get('/wish/findwish/').reject()

    //   expect(badGetWishByValueResponse.statusCode).toEqual(500)
    // })
  })
})

describe('create a wish', () => {
  it('successfully creates a wish', async () => {
    const createWishResponse = await request(app)
    .post('/wish/createwish')
    .send({
      firstName: "Homer",
      age: "8",
      hometown: "Woodstock",
      illness: "Critical Illness 2",
      wishType: "MEET",
      wishDetail: "someone famous"
    })

    expect(createWishResponse.statusCode).toEqual(201)
  })
  it('errors out with a bad create body', async () => {
    const badCreateWishResponse = await request(app)
    .post('/wish/createwish')
    .send({
      firstName: "Homer",
      lastName: "Depot"
    })

    expect(badCreateWishResponse.statusCode).toEqual(500)
  })
})

describe('delete a wish', () => {
  it('successfully deletes a wish', async () => {
    const createWishResponse = await request(app)
      .post('/wish/createwish')
      .send({
        firstName: "Homer",
        age: "8",
        hometown: "Woodstock",
        illness: "Critical Illness 2",
        wishType: "MEET",
        wishDetail: "someone famous"
      })

    const getWishByName = await request(app)
      .get('/wish/findwish/Homer')

    const id = getWishByName.body[0]._id

    const deleteWishResponse = await request(app)
    .delete(`/wish/deletewish/${id}`)

    expect(deleteWishResponse.statusCode).toEqual(200)
  })
  it('returns 404 when wish id is not found', async () => {
    const badDeleteWishResponse = await request(app)
    .delete(`/wish/deletewish/44`)

    console.log('!!!!!!', badDeleteWishResponse.text)
    expect(badDeleteWishResponse.text).toEqual('{"message":"Wish not found with id 44"}')
    expect(badDeleteWishResponse.statusCode).toEqual(404)
  })
})