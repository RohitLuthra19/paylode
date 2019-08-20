export const cloneDeep = (item) => {
  if (!item || typeof item !== 'object') return item;
  let constructor = item.constructor();
  return Object.keys(item).reduce((acc, curr) => {
    acc[curr] = cloneDeep(item[curr]);
    return acc;
  }, constructor)
}

export const storeToken = (token) => {
  try {
    localStorage.setItem('token', token);
  } catch (error) {
    console.log('localStorage error during token store:', error);
  }
}

export const deleteToken = () => {
  try {
    localStorage.removeItem('token');
  } catch (error) {
    console.log('localStorage error during token delete:', error);
  }
}