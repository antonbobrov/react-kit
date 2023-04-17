import { RefObject } from 'react';

export type TEventElement = Document | Element | Window;

export type THookEventElement<T = TEventElement> = T | RefObject<T> | null;
