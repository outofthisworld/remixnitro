declare module "etag-hash" {
  interface Hash {
    digest: () => string;
    update: (value: string | NodeJS.ArrayBufferView) => void;
  }
  export function createHash(sizeInMb: number): Hash;
}
