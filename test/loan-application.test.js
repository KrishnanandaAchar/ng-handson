import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../loan-application.js';

describe('LoanApplication', () => {
  let el;

  beforeEach('Render Loan Application', async () => {
    el = await fixture(html`<loan-application></loan-application>`);
    expect(el).to.exist;
  });

  it('check increment method', async () => {
    expect(el.counter).to.equal(5);
    el.__increment();
    el.requestUpdate();
    await el.updateComplete;
    expect(el.counter).to.equal(6);
  });

  it('Check Title Type', async () => {
    el = await fixture(html`<loan-application title='Loan Application'></loan-application>`);
    expect(el.title).to.be.a('string');
    expect(el.title).to.equal('Loan Application');
    expect(el.counter).to.be.equal(5);
  });

  it('Check Dashboard Content', async () => {
    el = await fixture(html`<dash-board></dash-board>`);
    expect(el).shadowDom.to.equal(`<loan-header></loan-header><div id='outlet'></div>`);
  });

  it('Render Increment Function', async () => {
    const stubIncrementFunction = stub(el, '__increment');
    el.requestUpdate();
    await el.updateComplete;
    stubIncrementFunction();
    expect(stubIncrementFunction).to.have.callCount(1);
  });

  it('should increment the counter by 1', async () => {
    el.__increment();
    expect(el.counter).to.equal(6);
  });

  it('Render Loan Application', async () => {
    el = await fixture(html`<loan-application></loan-application>`);
    const dashboard = el.shadowRoot.querySelector('dash-board');
    expect(dashboard).to.exist;
  });

  it('Render Home Loan Dashboard menu', async () => {
      el = await fixture(html`<dashboard-menu title='Home Loan'></dashboard-menu>`);
      const dashboardCard = el.shadowRoot.querySelector('.card');
      expect(dashboardCard).to.exist;
      const title = el.shadowRoot.querySelector('h4').innerText;
      expect(title).to.equal('Home Loan');
  });

  it('Render Personal Loan Dashboard menu', async () => {
      el = await fixture(html`<dashboard-menu title='Personal Loan'></dashboard-menu>`);
      const dashboardCard = el.shadowRoot.querySelector('.card');
      expect(dashboardCard).to.exist;
      const title = el.shadowRoot.querySelector('h4').innerText;
      expect(title).to.equal('Personal Loan');
  });

  it('Render Car Loan Dashboard menu', async () => {
      el = await fixture(html`<dashboard-menu title='Car Loan'></dashboard-menu>`);
      const dashboardCard = el.shadowRoot.querySelector('.card');
      expect(dashboardCard).to.exist;
      const title = el.shadowRoot.querySelector('h4').innerText;
      expect(title).to.equal('Car Loan');
  });

  it('Render Vacation Loan Dashboard menu', async () => {
      el = await fixture(html`<dashboard-menu title='Vacation Loan'></dashboard-menu>`);
      const dashboardCard = el.shadowRoot.querySelector('.card');
      expect(dashboardCard).to.exist;
      const title = el.shadowRoot.querySelector('h4').innerText;
      expect(title).to.equal('Vacation Loan');
  });
});
