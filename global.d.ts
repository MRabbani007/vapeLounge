// import { Connection } from "mongoose";
// import type { MongoClient } from "mongodb";
import { Mongoose } from "mongoose";

/* eslint-disable no-var */

declare global {
  var mongoose: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}

// declare module global {
//   // function someFunction(): string;
//   // var someVariable: string;
//   var mongoose: {
//     conn: string;
//     promise: Promise;
//   };
// }

// declare global {
//   namespace globalThis {
//     // var _mongoClientPromise: Promise<MongoClient>;
//     var mongoose: {
//       conn: any;
//       promise: Promise;
//     };
//   }
// }

// declare module NodeJS {
//   interface Global {
//     mongoose: Connection | null;
//   }
// }
