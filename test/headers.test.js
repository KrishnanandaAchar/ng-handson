import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  let el;

  beforeEach('Render Header', async () => {
    el = await fixture(html`<loan-header></loan-header>`);
    expect(el).to.exist;
  });

  it('Render Header Title', () => {
    const title = el.shadowRoot.querySelector('p').innerText;
    expect(title).to.equal('Apply Loan');
   });

   it('Render English Language Button', async () => {
    const button = el.shadowRoot.getElementById('en-GB');
    expect(button.textContent.trim()).to.equal('EN');
  });

  it('Click English Language Button', async () => {
    const stubLocaleChangeButton = stub(el, 'localeChanged');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.getElementById('en-GB').click();
    expect(stubLocaleChangeButton).to.have.callCount(1);
  });

  it('Render NL Language Button', () => {
    const button = el.shadowRoot.getElementById('nl-NL');
    expect(button.textContent.trim()).to.equal('NL');
  });

  it('Click NL Language Button', async () => {
    const stubLocaleChangedButton = stub(el, 'localeChanged');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.getElementById('nl-NL').click();
    expect(stubLocaleChangedButton).to.have.callCount(1);
  });

  it('check for the color change of active EN language button', async () => {
    const languageButton = el.shadowRoot.querySelectorAll('button');
    languageButton[0].click();
    expect(languageButton[0]).to.have.class('bg-btn-color');
    expect(languageButton[0]).to.not.have.class('btn-cursor');
    expect(languageButton[1]).to.have.class('btn-cursor');
    expect(languageButton[1]).to.not.have.class('bg-btn-color');
  });

  it('check for the color change of active NL language button', async () => {
    const languageButton = el.shadowRoot.querySelectorAll('button');
    languageButton[1].click();
    expect(languageButton[1]).to.have.class('bg-btn-color');
    expect(languageButton[1]).to.not.have.class('btn-cursor');
    expect(languageButton[0]).to.have.class('btn-cursor');
    expect(languageButton[0]).to.not.have.class('bg-btn-color');
  });
});
