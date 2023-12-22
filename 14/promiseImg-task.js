
// Функция loadImage принимает URL изображения, создает новый элемент Image,
// устанавливает обработчики onload и onerror, после устанавливает src изображения.
// Когда изображение загружено успешно, промис разрешается с элементом изображения.
// Если произошла ошибка при загрузке, промис будет отклонен с соответствующей ошибкой.
const resultParagraph = document.querySelector(".result-paragraph");
const imgLink = document.querySelector(".img-link");
function loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        resolve(img);
      };
      img.onerror = () => {
        reject(new Error("Ошибка при загрузке изображения"));
      };
    });
  }
  // Пример использования функции
  const imageUrl = "https://w-dog.ru/wallpapers/10/13/439127814840868/leto-more-solnce-plyazh-pesok-bereg.jpg";
  loadImage(imageUrl)
    .then((image) => {
      console.log("Изображение было загружено:", image);
      imgLink.src = imageUrl;
    })
    .catch((error) => {
      console.error('Ошибка при загрузке изображения:', error);
    });

    alert("Решение в консоли")