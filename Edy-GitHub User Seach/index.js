const input = document.querySelector(".search-container__input");
const usernameTitle = document.querySelector(".username__title");
const debounceFetch = (func, timeout) => {
  let timer;
  console.log(timer);
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      const data = await fetch(`https://api.github.com/users/${input.value}`);
      const user = await data.json();
      console.log(user);
      usernameTitle.innerText = user.login;
    }, timeout);
  };
};
const getInputValue = debounceFetch(input.value, 1000);

input.addEventListener("keyup", getInputValue);
