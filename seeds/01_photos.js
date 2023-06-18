/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('photoalbum').del();
    await knex('photoalbum').insert([
        {
            id: 1,
            image: 'calgary-skyline.jpg',
            photo_name: 'Calgary Skyline',
            photo_longitude: '51 deg 2\' 19.49" N',
            photo_latitude: '114 deg 5\' 29.86" W',
        },
        {
            id: 2,
            image: 'waterton.jpg',
            photo_name: 'Waterton',
            photo_longitude: 'N/A',
            photo_latitude: 'N/A',
        },
        {
            id: 3,
            image: "peace-bridge.jpg",
            photo_name: "Peace Bridge",
            photo_longitude: '51 deg 3\' 11.95" N',
            photo_latitude: '114 deg 4\' 38.57" W',
        }
    ]);
};
