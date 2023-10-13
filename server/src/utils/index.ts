export function randomString<N extends number>(length: N, type?: 'letters' | 'numbers'): string & { length: N } {
  const numbers = '0123456789';
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const characters = (letters + numbers) as 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';

  if (type) {
    if (type === 'letters') {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        result += letters.charAt(randomIndex);
      }
    } else if (type === 'numbers') {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        result += numbers.charAt(randomIndex);
      }
    }
    return result as string & { length: N };
  } else {
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    let resLength = result.length;
    let overwriteLength = resLength / 3;
    let resultArray = Array.from(result);
    if (result.match(/0-9/) === null) {
      for (let i = 0; i < overwriteLength; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const randomResultIndex = Math.floor(Math.random() * resLength);
        resultArray[randomResultIndex] = numbers.charAt(randomIndex);
      }
      result = resultArray.join('')
    }
    return result as string & { length: N };
  }
}
export function createdAt(date: Date) {
  const options = {
    timeZone: 'America/Chicago',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  } as const;

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate;
}
type UUID = `${ReturnType<(length: 2, type: 'letters') => string & {length: 2}>}${ReturnType<new () => Date['getFullYear']>}${ReturnType<(length: 2, type: 'numbers') => string & {length: 2}>}-${ReturnType<(length: 6) => string & {length: 6}>}-${hours}${minutes}${seconds}-${randomString(4)}${month}${day}-${randomString(8)}`

const createUser = async (username: string, password: string, email: string) => {
  // Get current date and time
  const now = new Date();
  const options = {
    timeZone: 'America/Chicago',
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  } as const;
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(now);
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Generate custom ID
  const customID = `${randomString(2, 'letters')}${year}${randomString(2, 'numbers')}-${randomString(6)}-${hours}${minutes}${seconds}-${randomString(4)}${month}${day}-${randomString(8)}`;

  // Insert into database along with the current timestamp
  // SQL: INSERT INTO users (custom_id, username, password, email, created_at) VALUES (?, ?, ?, ?, ?)
  // Parameters: [customID, username, password, email, now]
};
