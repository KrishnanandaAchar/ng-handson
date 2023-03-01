import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  let el;

  beforeEach('Render Customer Details Page', async () => {
    el = await fixture(html`<customer-details></customer-details>`);
  });

  it('Render Header Title', () => {
    const title = el.shadowRoot.querySelector('h2').innerText;
    expect(title).to.equal('Customer Details');
  });

  it('Render First Name Field', async ()  => {
    const formField = el.shadowRoot.getElementById('first_name');
    expect(formField.label).to.equal('First Name');
    expect(formField.getAttribute('type')).to.equal('text');
  });

  it('Validate First Name Field pass', async ()  => {
    const formField = el.shadowRoot.getElementById('first_name');
    expect(formField.hasFeedbackFor.includes('error')).to.be.true;
    formField.modelValue = 'test firstname';
    expect(formField.hasFeedbackFor.includes('error')).to.be.false;
  });

  it('Validate First Name Field fail', async ()  => {
    const formField = el.shadowRoot.getElementById('first_name');
    expect(formField.hasFeedbackFor.includes('error')).to.be.true;
    formField.modelValue = 'test 123';
    expect(formField.hasFeedbackFor.includes('error')).to.be.true;
  });

  it('Render Last Name Field', async ()  => {
    const formField = el.shadowRoot.getElementById('last_name');
    expect(formField.label).to.equal('Last Name');
    expect(formField.getAttribute('type')).to.equal('text');
  });

  it('Validate Last Name Field pass', async ()  => {
    const formField = el.shadowRoot.getElementById('last_name');
    expect(formField.hasFeedbackFor.includes('error')).to.be.true;
    formField.modelValue = 'test lastname';
    expect(formField.hasFeedbackFor.includes('error')).to.be.false;
  });

  it('Validate Last Name Field Fail', async ()  => {
    const formField = el.shadowRoot.getElementById('last_name');
    expect(formField.hasFeedbackFor.includes('error')).to.be.true;
    formField.modelValue = 'test 123';
    expect(formField.hasFeedbackFor.includes('error')).to.be.true;
  });

  // it('Render DOB Field', async ()  => {
  //   const formField = el.shadowRoot.getElementById('dateof_birth');
  //   expect(formField.label).to.equal('Date of Birth');
  //   expect(formField.getAttribute('type')).to.equal('text');
  // });

  it('Validate DOB Field', async ()  => {
    const formField = el.shadowRoot.getElementById('dateof_birth');
    expect(formField.hasFeedbackFor.includes('error')).to.be.false;
    formField.modelValue = 'date';
    expect(formField.hasFeedbackFor.includes('error')).to.be.true;
  });

  it('Render Email Field', async ()  => {
    const formField = el.shadowRoot.getElementById('email');
    expect(formField.label).to.equal('Email');
    expect(formField.getAttribute('type')).to.equal('text');
  });

  it('Validate Email Field Pass', async ()  => {
    const formField = el.shadowRoot.getElementById('email');
    expect(formField.hasFeedbackFor.includes('error')).to.be.true;
    formField.modelValue = 'test@test.com';
    expect(formField.hasFeedbackFor.includes('error')).to.be.false;
  });

  it('Validate Email Field Fail', async ()  => {
    const formField = el.shadowRoot.getElementById('email');
    expect(formField.hasFeedbackFor.includes('error')).to.be.true;
    formField.modelValue = 'testtestcom';
    expect(formField.hasFeedbackFor.includes('error')).to.be.true;
  });

  it('Render Mobile Number Field', async ()  => {
    const formField = el.shadowRoot.getElementById('mobile_number');
    expect(formField.label).to.equal('Mobile Number');
  });

  it('Validate Mobile Number Field Pass', async ()  => {
    const formField = el.shadowRoot.getElementById('mobile_number');
    expect(formField.hasFeedbackFor.includes('error')).to.be.true;
    formField.modelValue = '9876543210';
    expect(formField.hasFeedbackFor.includes('error')).to.be.false;
  });

  it('Validate Mobile Number Field Fail', async ()  => {
    const formField = el.shadowRoot.getElementById('mobile_number');
    expect(formField.hasFeedbackFor.includes('error')).to.be.true;
    formField.modelValue = '543210';
    expect(formField.hasFeedbackFor.includes('error')).to.be.true;
  });

  it('Render Monthly Salary Field', async ()  => {
    const formField = el.shadowRoot.getElementById('monthly_salary');
    expect(formField.label).to.equal('Monthly Salary');
  });

  it('Validate Monthly Salary Field', async ()  => {
    const formField = el.shadowRoot.getElementById('monthly_salary');
    expect(formField.hasFeedbackFor.includes('error')).to.be.true;
    formField.modelValue = 25000;
    expect(formField.hasFeedbackFor.includes('error')).to.be.false;
  });
  
  it('Render Previous EMIs Amount Field', async ()  => {
    const formField = el.shadowRoot.getElementById('EMIs_amount');
    expect(formField.label).to.equal('Previous EMIs Amount');
  });

  it('Validate Previous EMIs Amount Field', async ()  => {
    const formField = el.shadowRoot.getElementById('EMIs_amount');
    expect(formField.hasFeedbackFor.includes('error')).to.be.true;
    formField.modelValue = 5000;
    expect(formField.hasFeedbackFor.includes('error')).to.be.false;
  });

  it('return to EMI Details on click of BACK button', async () => {
    const stubToEmiDetais = stub(el,'_toEmidetails');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('.backbg-btn-color').click();
    expect(stubToEmiDetais).to.have.callCount(1);
  });
});
