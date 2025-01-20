import { NextFunction, Request, Response } from "express";

export interface Controller {
	handler(request: Request, response: Response, next?: NextFunction): any;
}

export interface UseCase {
	execute(data: any): any;
}