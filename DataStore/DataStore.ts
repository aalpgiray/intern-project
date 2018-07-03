import { IDataStore } from '../App/App';

export default class DataStore implements IDataStore {
  public constructor(private storage: Storage) {}

  addNewWord(word: string, meanings: string[]): void {
    this.storage.setItem(word, meanings.join('#:#'));
  }
  lookup(word: string): string[] {
    var row = this.storage.getItem(word);

    if (!row) throw 'Word not fould!';

    return row.split('#:#');
  }
}
