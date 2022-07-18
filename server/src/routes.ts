import { Router, Request, Response } from 'express';

const router = Router();

router.get('/.', (request: Request, response: Response) => {
  return response.status(201).send({ ok: true });
})

export { router as Router };