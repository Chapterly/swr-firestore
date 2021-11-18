import React from 'react';
import { ReactNode } from 'react';
import { Fuego } from '../classes/Fuego';
declare type Context = {
    fuego: Fuego;
};
export declare const FuegoContext: React.Context<Context>;
declare type Props = {
    children: ReactNode;
    fuego: Fuego;
};
export declare let fuego: Fuego;
export declare const setFuego: (f: Fuego) => Fuego;
export declare const useFuegoContext: () => Context;
export declare const FuegoProvider: ({ children, fuego }: Props) => JSX.Element;
export {};
