// 必要なものをインポート
import { $axios } from "./axiosHelper.js";
import { createElements, createErrorElement } from "./createElement.js";

const errorMsg = document.getElementById("error__message");

// コンテンツを読み込んだらブラウザが実行する
window.addEventListener("DOMContentLoaded", () => {
  // ポケモンの一覧を取得するAPIを叩く
  $axios("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(({ data }) => {
      // 取得したデータを変数に格納
      const pokemonList = data.results;
      // HTML要素を取得(親要素)
      const pokemonListElement = document.getElementById("list");

      // ポケモンそれぞれに対し処理を行い、データをdetailに格納
      pokemonList.forEach((pokemon) => {
        const pokemonDetailURL = pokemon.url;
        $axios(pokemonDetailURL)
          .then((response) => {
            const data = response.data;
            const imgPath =
              data.sprites.other["official-artwork"].front_default;
            const speciesDetailURL = data.species.url;

            // 日本語の名前を取得してpokemonesに格納
            $axios(speciesDetailURL)
              .then((response) => {
                const nameJa = response.data.names[0].name;

                // htmlの文字列を定義
                const listItemHTML = `
                <li class="list-item">
                  <div class="character">
                  <img src="${imgPath}" width="475" height="475" alt="${nameJa}" class="character__img">
                  </div>
                  <p class="character__name">${nameJa}</p>
                </li>`;
                // createElements 関数を利用して、生成したHTMLからDOM要素をを作成
                const listElement = createElements(listItemHTML);
                //ulの子要素として追加
                pokemonListElement.appendChild(listElement);
              })
              .catch((error) => {
                const errorMassage = createErrorElement(error);
                errorMsg.appendChild(errorMassage);
              });
          })
          .catch((error) => {
            const errorMassage = createErrorElement(error);
            errorMsg.appendChild(errorMassage);
          });
      });
    })
    .catch((error) => {
      const errorMassage = createErrorElement(error);
      errorMsg.appendChild(errorMassage);
    });
});
