#!/usr/bin/env node
import { config } from 'dotenv'

config()

export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'nicolas'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_DATABASE = process.env.DB_DATABASE || 'cellPhonesCompany'
export const DB_PORT = process.env.DB_PORT || 3306