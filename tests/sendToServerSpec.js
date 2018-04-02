import { expect } from 'chai';
import sendToServer from '../src/sendToServer';


describe('sendToServer - function', () => {
  it('Отправляет данные на псевдосервер', async () => {
    const expectedData = 'Cat';
    const data = await sendToServer('Cat');

    expect(data).to.equal(expectedData);
  });

  it('Выбрасывает исключение в случае отправки пустой строки', async () => {
    const expectedError = '<span style="color: red">Empty string sending. Abort.</span>';
    let error;
    try {
      await sendToServer('');
    } catch (e) {
      error = e.message;
    }

    expect(error).to.equal(expectedError);
  });
});

