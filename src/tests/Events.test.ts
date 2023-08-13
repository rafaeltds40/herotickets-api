import request from 'supertest';
import { App } from '../app';
const app = new App();
const express = app.app;

describe('Event test', () =>{

    it('/POST Event', async ()=>{
        const event = {
            title: 'Pink Floyd',
            price: [{sector:'Pista', amount: '290' }],
            description: 'Show lendario',
            city: 'Balenario Gaivota',
            location: {
                longitude: '-29.138986898395103',
                latitude: '-49.61441782458897'
            },
            coupons: [],
            date: new Date,
            participants: []
        };

        const response = await request(express)
            .post('/events')
            .field('title', event.title)
            .field('city', event.city)
            .field('description', event.description)
            .field('coupons', event.coupons)
            .field('location[latitude]', event.location.latitude)
            .field('location[longitude]', event.location.longitude)
            .field('price[sector]', event.price[0].sector)
            .field('price[amount]', event.price[0].amount)
            .attach('banner','/RAFAEL TRINDADE DA SILVA - TUDO/Documentos Pessoais/minha_foto.jpg')
            .attach('flyers','/RAFAEL TRINDADE DA SILVA - TUDO/Documentos Pessoais/m2.jpg');

        if (response.error) {
            console.log('error', response.error);
        }
        expect(response.status).toBe(201);
        expect(response.body).toEqual({message: 'Evento criado com'});
    })
});