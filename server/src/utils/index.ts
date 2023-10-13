import { StringLiteralType } from 'typescript';

export function randomString<N extends number, T extends 'letters' | 'numbers' | undefined = undefined>(length: N, type?: T): string & { length: N } | string & { length: N, __type: T } {
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
    return result as string & { length: N, __type: T };
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
};
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
};
type Day = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31';
type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';
type Year = 1950 | 1951 | 1952 | 1953 | 1954 | 1955 | 1956 | 1957 | 1958 | 1959 | 1960 | 1961 | 1962 | 1963 | 1964 | 1965 | 1966 | 1967 | 1968 | 1969 | 1970 | 1971 | 1972 | 1973 | 1974 | 1975 | 1976 | 1977 | 1978 | 1979 | 1980 | 1981 | 1982 | 1983 | 1984 | 1985 | 1986 | 1987 | 1988 | 1989 | 1990 | 1991 | 1992 | 1993 | 1994 | 1995 | 1996 | 1997 | 1998 | 1999 | 2000 | 2001 | 2002 | 2003 | 2004 | 2005 | 2006 | 2007 | 2008 | 2009 | 2010 | 2011 | 2012 | 2013 | 2014 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | 2035 | 2036 | 2037 | 2038 | 2039 | 2040 | 2041 | 2042 | 2043 | 2044 | 2045 | 2046 | 2047 | 2048 | 2049 | 2050 | 2051 | 2052 | 2053 | 2054 | 2055 | 2056 | 2057 | 2058 | 2059 | 2060 | 2061 | 2062 | 2063 | 2064 | 2065 | 2066 | 2067 | 2068 | 2069 | 2070 | 2071 | 2072 | 2073 | 2074 | 2075 | 2076 | 2077 | 2078 | 2079 | 2080 | 2081 | 2082 | 2083 | 2084 | 2085 | 2086 | 2087 | 2088 | 2089 | 2090 | 2091 | 2092 | 2093 | 2094 | 2095 | 2096 | 2097 | 2098 | 2099 | 2100 | 2100 | 2101 | 2102 | 2103 | 2104 | 2105 | 2106 | 2107 | 2108 | 2109 | 2110 | 2111 | 2112 | 2113 | 2114 | 2115 | 2116 | 2117 | 2118 | 2119 | 2120 | 2121 | 2122 | 2123 | 2124 | 2125 | 2126 | 2127 | 2128 | 2129 | 2130 | 2131 | 2132 | 2133 | 2134 | 2135 | 2136 | 2137 | 2138 | 2139 | 2140 | 2141 | 2142 | 2143 | 2144 | 2145 | 2146 | 2147 | 2148 | 2149 | 2150 | 2151 | 2152 | 2153 | 2154 | 2155 | 2156 | 2157 | 2158 | 2159 | 2160 | 2161 | 2162 | 2163 | 2164 | 2165 | 2166 | 2167 | 2168 | 2169 | 2170 | 2171 | 2172 | 2173 | 2174 | 2175 | 2176 | 2177 | 2178 | 2179 | 2180 | 2181 | 2182 | 2183 | 2184 | 2185 | 2186 | 2187 | 2188 | 2189 | 2190 | 2191 | 2192 | 2193 | 2194 | 2195 | 2196 | 2197 | 2198 | 2199 | 2200 | 2200 | 2201 | 2202 | 2203 | 2204 | 2205 | 2206 | 2207 | 2208 | 2209 | 2210 | 2211 | 2212 | 2213 | 2214 | 2215 | 2216 | 2217 | 2218 | 2219 | 2220 | 2222 | 2222 | 2223 | 2224 | 2225 | 2226 | 2227 | 2228 | 2229 | 2230 | 2231 | 2232 | 2233 | 2234 | 2235 | 2236 | 2237 | 2238 | 2239 | 2240 | 2241 | 2242 | 2243 | 2244 | 2245 | 2246 | 2247 | 2248 | 2249 | 2250 | 2251 | 2252 | 2253 | 2254 | 2255 | 2256 | 2257 | 2258 | 2259 | 2260 | 2261 | 2262 | 2263 | 2264 | 2265 | 2266 | 2267 | 2268 | 2269 | 2270 | 2271 | 2272 | 2273 | 2274 | 2275 | 2276 | 2277 | 2278 | 2279 | 2280 | 2281 | 2282 | 2283 | 2284 | 2285 | 2286 | 2287 | 2288 | 2289 | 2290 | 2291 | 2292 | 2293 | 2294 | 2295 | 2296 | 2297 | 2298 | 2299 | 2300;

type Hours = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23';
type Minutes = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '48' | '49' | '50' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '59';
type Seconds = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '48' | '49' | '50' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '59';
type CurrentDate = ReturnType() => (new () => Date);
function getDateValue<T extends [Day, Month, Year, Hours, Minutes, Seconds]>(date: Date ): T {
  const day = String(date.getDate()).padStart(2, '0') as Day;
  const month = String(date.getMonth() + 1).padStart(2, '0') as Month;
  const year = date.getFullYear() as Year;
  const hours = String(date.getHours()).padStart(2, '0') as string & { length: 2 } as Hours;
  const minutes = String(date.getMinutes()).padStart(2, '0') as string & { length: 2 } as Minutes;
  const seconds = String(date.getSeconds()).padStart(2, '0') as string & { length: 2 } as Seconds;
  return [day, month, year, hours, minutes, seconds] as T;
}
interface UUID {
  full<T extends [Day, Month, Year, Hours, Minutes, Seconds]>(date: Date): `${UUID['__part-1']}-${UUID['__part-2']}-${UUID['__part-3']}-${UUID['__part-4']}-${UUID['__part-5']}`;
  '__part-1': `P18${Year}` & typeof randomString<1, 'letters'>;
  '__part-2': typeof randomString<6>;
  '__part-3': `${Hours}${Minutes}${Seconds}`;
  '__part-4': typeof randomString<4> & `${Month}${Day}`;
  '__part-5': typeof randomString<8>;

};



type RandomString<Length extends number, Type extends 'letters' | 'numbers' | undefined = undefined> = ReturnType<typeof randomString<Length, Type>>;

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
  const day = String(now.getDate()).padStart(2, '0') as Day;
  const month = String(now.getMonth() + 1).padStart(2, '0') as Month;
  const year = now.getFullYear() as Year;
  const hours = String(now.getHours()).padStart(2, '0') as Hours;
  const minutes = String(now.getMinutes()).padStart(2, '0') as Minutes;
  const seconds = String(now.getSeconds()).padStart(2, '0') as Seconds;

  // Generate custom ID
  const customID = `P18${year}${randomString(1, 'letters')}-${randomString(6)}-${hours}${minutes}${seconds}-${ randomString(4) }${ month }${ day }-${ randomString(8) }` as UUID;

  // Insert into database along with the current timestamp
  // SQL: INSERT INTO users (custom_id, username, password, email, created_at) VALUES (?, ?, ?, ?, ?)
  // Parameters: [customID, username, password, email, now]
};
