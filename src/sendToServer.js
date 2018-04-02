/**
 * Валидация данных на предполагаемом сервере
 * @param {String} data
 * @returns {Boolean}
 */
const serverValidate = (data) => {
  if (typeof data === 'number') {
    return true;
  }

  return data.length > 0;
};

/**
 * Фейковый метод для отправки на сервер данных
 * @param {string} data
 * @returns {Promise}
 */
const sendToServer = data => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (serverValidate(data)) {
      resolve(data);
    } else {
      reject(new Error('<span style="color: red">Empty string sending. Abort.</span>'));
    }
  }, 300);
});

export default sendToServer;
