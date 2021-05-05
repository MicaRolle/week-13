//* WIKIPEDIA TEST //*
describe('Wikipedia testing - Search Google', () => {
    it('Open Google and search Wikipedia', () => {
      browser.url('https://www.google.com/');
      const input = $('.gLFyf');
      input.setValue('Wikipedia');
      browser.keys('Enter');
      browser.pause(1500);
      const result = $('.LC20lb');
      result.click();
      browser.pause(1500);
      expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
      expect(browser).toHaveTitle('Wikipedia, la enciclopedia libre');
    })
  })

