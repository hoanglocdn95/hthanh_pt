import { createCipheriv, createDecipheriv } from 'crypto';

export const appEncode = text => {
  const key = Buffer.from(process.env.ENCODE_KEY, 'hex');
  const iv = Buffer.from(process.env.ENCODE_IV, 'hex');
  const cipher = createCipheriv(process.env.ENCODE_ALGORITHM, key, iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString('hex');
};

export const appDecode = text => {
  const key = Buffer.from(process.env.ENCODE_KEY, 'hex');
  const iv = Buffer.from(process.env.ENCODE_IV, 'hex');
  const encryptedText = Buffer.from(text, 'hex');
  const decipher = createDecipheriv(process.env.ENCODE_ALGORITHM, key, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};
