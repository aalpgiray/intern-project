export default class App {
  public constructor(
    private appElement: HTMLElement,
    private dataStore: IDataStore
  ) {}

  private save(): void {
    this.appElement.querySelector('#save').addEventListener('click', e => {
      this.dataStore.addNewWord(
        (this.appElement.querySelector('#word') as HTMLInputElement).value,
        (this.appElement.querySelector(
          '#meanings'
        ) as HTMLInputElement).value.split(',')
      );
    });
  }

  private lookup(): void {
    this.appElement.querySelector('#lookup').addEventListener('click', e => {
      var meanings = this.dataStore.lookup(
        (this.appElement.querySelector('#word') as HTMLInputElement).value
      );

      (this.appElement.querySelector(
        '#meanings'
      ) as HTMLInputElement).value = meanings.join(',');
    });
  }

  public render(): void {
    this.appElement.innerHTML = `
      <h1>Test App!!!</h1>
      <input id="word" />
      <input id="meanings" />
      <button id="save">Save</button>
      <button id="lookup">Lookup</button>
    `;

    this.save();
    this.lookup();
  }
}

export interface IDataStore {
  addNewWord(word: string, meanings: string[]): void;
  lookup(word: string): string[];
}
