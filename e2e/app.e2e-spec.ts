import { OpenWeatherProjectPage } from './app.po';

describe('open-weather-project App', function() {
  let page: OpenWeatherProjectPage;

  beforeEach(() => {
    page = new OpenWeatherProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
