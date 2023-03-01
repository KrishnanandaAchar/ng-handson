import { html, fixture, expect } from '@open-wc/testing';
import { stub, spy } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import { inWords } from '../src/utils/numToWord.js';

describe('Basic details', () => {
  let el;

  beforeEach('Renders Basic Details Component', async() => {
    el = await fixture(html`<basic-details type='Personal Loan'></basic-details>`);
    el.setAttribute('type', 'Personal Loan');
    expect(el).to.exist;
  });

  // it('Render Title', async () => {
  //   const title = el.shadowRoot.querySelector('h2').innerText;
  //   expect(title).to.equal('Loan Details');
  // });

  it('check default properties', async () => {
    expect(el.amount).to.equal(10000);
    expect(el.range).to.equal(2);
    expect(el.emiCalc).to.equal(0);
    expect(el.type).to.equal(null);
  });

  it('check type field', async () => {
    const typeField = el.shadowRoot.getElementById('type');
    typeField.value = 'Car Loan';
    expect(typeField.value).to.equal('Car Loan');
  });

  it('check amount field', async () => {
    const amountField = el.shadowRoot.getElementById('amount');
    expect(amountField.value).to.equal('10,000.00')
  });

  it('check amount field change and render updated amount', async () => {
    const amountField = el.shadowRoot.getElementById('amount');
    amountField.value = '15,000.00';
    amountField.dispatchEvent(new Event('input'));
    expect(amountField.value).to.equal('15,000.00');  
  });

  it('return to dashboard on click of previous button', async () => {
    const stubToDashboard = stub(el,'_toDashboard');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('.btn-previous').click();
    expect(stubToDashboard).to.have.callCount(1);
  });

  it('capture details on click of next button', async () => {
    const stubCaptureDetails = stub(el,'_captureDetails');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('.btn-next').click();
    expect(stubCaptureDetails).to.have.callCount(1);
  });

  it('test inWords function', async () => {
    const r = inWords(100);
    expect(r).to.equal('one hundred '); 
  });

  it('test inWords function', async () => {
    const r = inWords(10);
    expect(r).to.equal('ten only '); 
  });
 
  it('_captureDetails makes a post request with the inputs', ()=>{
    const spyFetch = spy(window, 'fetch');
    el.shadowRoot.querySelector('.type').value = 'Personal Loan';
    el.shadowRoot.querySelector('.amount').value = '15000';
    el.shadowRoot.querySelector('.period').value = '10';
    el._captureDetails();
    expect(spyFetch.args[0][1].method).to.equal('POST');
    expect(spyFetch.args[0][1].body).deep.equal('{"name":"Personal Loan","amount":"15000","period":"10"}');
    expect(spyFetch).to.have.called;
    spyFetch.restore();
  });
});
