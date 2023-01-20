export class BaseLaureate {
  constructor(
    public id: string,
    public firstName: string | undefined,
    public surName: string | undefined,
  ) {}

  protected static handleBrokenCharacters(name?: string) {
    return name?.replace(/&#332;/i, 'Ō');
  }

  public fullName() {
    if (!this.surName) return this.firstName;

    return `${this.firstName} ${this.surName}`;
  }
}
