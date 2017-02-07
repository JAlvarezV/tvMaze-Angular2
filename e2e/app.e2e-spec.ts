import { TvMazeAngular2Page } from './app.po';

describe('tv-maze-angular2 App', function() {
  let page: TvMazeAngular2Page;

  beforeEach(() => {
    page = new TvMazeAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
