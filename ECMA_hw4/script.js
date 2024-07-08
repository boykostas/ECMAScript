// Эта функция для получения данных о пользователе с сервера
async function getUserData(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error(`User with ID ${userId} not found`);
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    return Promise.reject(error);
  }
}

// Функция для отправки данных пользователя на сервер
async function saveUserData(user) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to save user data");
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

// Функция для изменения стиля элемента через заданное время
function changeStyleDelayed(elementId, delay) {
  setTimeout(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.classList.remove("initial-style");
      element.classList.add("new-style");
    }
  }, delay);
}

// Пример использования getUserData
getUserData(1)
  .then((userData) => {
    console.log("User data:", userData);
  })
  .catch((error) => {
    console.log(error.message);
  });


// Пример использования saveUserData
const user = {
  name: "John Smith",
  age: 30,
  email: "john@example.com",
};

saveUserData(user)
  .then(() => {
    console.log("User data saved successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

changeStyleDelayed("myElement", 2000);
