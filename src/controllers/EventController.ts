import { Request, Response, NextFunction } from "express";
import { EventUseCase } from "../useCases/EventUseCase";
import { Event } from "../entities/Event";

    class EventController {
        
        constructor(private eventUseCase: EventUseCase) {

        }

        async create(request: Request, response: Response, next: NextFunction) {

            const eventData: Event = request.body;
            try {
                const createEvent = await this.eventUseCase.create(eventData);
                return response.status(201).json({message: 'Evento criado com'});
            } catch (error) {
                next(error);
            }
        }
    }

    export { EventController };