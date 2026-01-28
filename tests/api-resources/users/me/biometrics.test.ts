// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';

const client = new Jocall3({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource biometrics', () => {
  // Prism tests are disabled
  test.skip('retrieveStatus', async () => {
    const responsePromise = client.users.me.biometrics.retrieveStatus();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('verify: only required params', async () => {
    const responsePromise = client.users.me.biometrics.verify({
      biometricSignature: 'base64encoded_one_time_fingerprint_proof',
      biometricType: 'fingerprint',
      deviceId: 'dev_mobile_android_ddeeff',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('verify: required and optional params', async () => {
    const response = await client.users.me.biometrics.verify({
      biometricSignature: 'base64encoded_one_time_fingerprint_proof',
      biometricType: 'fingerprint',
      deviceId: 'dev_mobile_android_ddeeff',
    });
  });
});
