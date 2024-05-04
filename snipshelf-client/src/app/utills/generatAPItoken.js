import { randomBytes } from 'crypto';

export const generateAPIToken = () => {
    // Generate a random string of bytes
    const randomBytesBuffer = randomBytes(24);
    
    // Convert the bytes to a hexadecimal string
    const token = randomBytesBuffer.toString('hex');
    
    return token;
  };
  