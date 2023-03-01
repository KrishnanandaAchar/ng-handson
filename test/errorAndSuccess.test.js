import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  it('Render Success Screen', async () => {
    const el = await fixture(html`<loan-success></loan-success>`);
    const stubHomeButton = stub(el, '_toHome');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('.home-btn').click();
    expect(stubHomeButton).to.have.callCount(1);
  });
});

describe('error screen', () => {
  it('Render Error Screen', async () => {
    const el = await fixture(html`<loan-error></loan-error>`);
    const stubHomeButton = stub(el, '_toHome');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('.home-btn').click();
    expect(stubHomeButton).to.have.callCount(1);
  });
});
