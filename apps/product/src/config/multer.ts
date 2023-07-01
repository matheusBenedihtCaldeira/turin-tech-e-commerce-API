/* eslint-disable @typescript-eslint/no-unused-vars */
import { Options, diskStorage } from 'multer';
import { extname, resolve } from 'path';
import { randomBytes } from 'crypto';

export default {
  dest: resolve(__dirname, '..', '..', 'uploads', 'images'),
  storage: diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      randomBytes(16, (error, hash) => {
        if (error) {
          cb(error, file.filename);
        }
        const filename = `${hash.toString('hex')}${extname(file.originalname)}`;
        cb(null, filename);
      });
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
} as Options;
