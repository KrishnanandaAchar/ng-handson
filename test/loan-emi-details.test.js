import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  let el;

  beforeEach('Render EMI Details', async () => {
    el = await fixture(html`<loanemi-details></loanemi-details>`);
    expect(el).to.be.accessible();
  });

  it('Render Heading', () => {
    const title = el.shadowRoot.querySelector('h2');
    expect(title).to.exist;
    expect(title.innerText).to.equal('EMI Details');
  });

  it('Check Cancel Function', async () => {
    const stubCancelFunction = stub(el, '_toBasicDetails');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('.cancel-btn').click();
    expect(stubCancelFunction).to.have.callCount(1);
  });

  it('Check Continue Function', async () => {
    const stubContinueFunction = stub(el, '_toCustomer');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('.continue-btn').click();
    expect(stubContinueFunction).to.have.callCount(1);
  });
});
