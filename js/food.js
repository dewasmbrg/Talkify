'use strict';

const listFood = document.querySelector('.tes');
//link api
const url = 'https://62e00b6b98dd9c9df60ca2ca.mockapi.io/api/v1/foods_data';

//fetch data from api
const getData = async (url) => {
    const fetchData = await fetch(url);

    if (!fetchData.ok) {
        const html = `<h1 class='error'>Data generated failed..
                        <br />
                        <p>Status ${fetchData.status} ${fetchData.statusText}
                    `;
        listFood.insertAdjacentHTML('afterend', html);
        return;
    }
    const data = await fetchData.json();

    //execute function renderFood to rendering data from data has been get before
    renderFood(data);
};
getData(url);

const renderFood = (food) => {
    for (let i = 0; i < food.length; i++) {
        const html = `<article>
                        <div class="header-card">
                            <img
                                src="${food[i].image}"
                            />
                        </div>
                        <div class="body-card">
                            <div>
                                <h3>${food[i].name}</h3>
                                <span>$${food[i].price}</span>
                            </div>
                            <p>
                            ${food[i].description}.
                            </p>
                        </div>
                    </article>`;

        listFood.insertAdjacentHTML('afterend', html);
    }
};
