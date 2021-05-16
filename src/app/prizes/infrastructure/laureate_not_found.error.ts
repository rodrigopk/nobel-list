export class LaureateNotFoundError extends Error {
  constructor(id: string) {
    super(`Could not find laureate for id ${id}`);
  }
}
