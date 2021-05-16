export class BasePrize {
  constructor(
    public year: string,
    public category: string,
  ) {}

  public capitalizedCategory() {
    if (!this.category) return '';

    return this.category.charAt(0).toUpperCase() + this.category.slice(1);
  }
}
