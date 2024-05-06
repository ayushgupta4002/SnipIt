import { randomBytes } from 'crypto';

export const generateAPIToken = () => {
    // Generate a random string of bytes
    const randomBytesBuffer = randomBytes(24);
    
    // Convert the bytes to a hexadecimal string
    const token = randomBytesBuffer.toString('hex');
    
    return token;
  };


  export const generateuserID = (userName) => {
    // Generate a random string of bytes
    const randomBytesBuffer = randomBytes(16);
    
    // Convert the bytes to a hexadecimal string
    const token = randomBytesBuffer.toString('hex');
    const name =  Buffer.from(userName, 'utf-8').toString('hex');
    
    return token+name+Date.now().toString();
  };
  
  