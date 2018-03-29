const serverValidate = (data) => {
  if (typeof data === 'number') {
    return true;
  }

  return data.length > 0;
};

const sendToServer = data => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (serverValidate(data)) {
      resolve(data);
    } else {
      reject(new Error('<span style="color: red">Empty string sending. Abort.</span>'));
    }
  }, 500);
});

export default sendToServer;
