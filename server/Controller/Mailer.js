import nodemailer, { createTransport } from 'nodemailer'

const transport = nodemailer.createTransport()

const message = { 
    from: 'mikemills930@gmail.com'
}