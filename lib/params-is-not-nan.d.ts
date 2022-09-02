import express from 'express';
/**
 * PARAMS-IS-NOT-NAN
 * @param keys {string[]}
 * @return {express.Handler}
 */
export default function (...keys: string[]): express.Handler;
