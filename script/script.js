function loadCategories() {
    // fetch the data

    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json()) // convert promise to json
        .then(data => displayCategories(data.categories)) // send data to displayCategories function
}


function loadVideos() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(response => response.json())
        .then(data => displayVideos(data.videos))
}



const loadCategoryVideos = (id) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayVideos(data.category))
}



// category_id":"1001","category":"Music

function displayCategories(categories) {
    const categoryContainer = document.getElementById('category-container');

    for (let category of categories) {

        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
        
        <button onclick="loadCategoryVideos('${category.category_id}')" class="btn btn-sm bg-[#25252515] hover:bg-[#FF1F3D] hover:text-white text-[#25252590]">
        ${category.category}</button>
        `;
        categoryContainer.appendChild(categoryDiv);
    }
}





// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }



// // second converded to json
// function getHoursAgo(timestamp) {
//     const now = Date.now() / 1000; // current time (seconds)
//     const diff = now - timestamp;

//     const hours = Math.floor(diff / 3600);
//     return `${hours} hours ago`;
// }


// load videos



const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");

    videoContainer.innerHTML = ""; // Clear previous videos

    videos.forEach((video) => {
        // console.log(video)

        const videoCard = document.createElement("div");

        videoCard.innerHTML = `
        <div class="card bg-base-100">
                <figure>
                    <img class="w-full h-[180px] object-cover " src="${video.thumbnail}" alt="photo" />
                    <!-- <span class="absolute bottom-2 right-2 text-white text-sm bg-black px-2 rounded-sm">3hrs 56 min
                        ago</span> -->
                </figure>
                <div class="flex gap-3 px-0 py-5">

                    <div class="flex items-center gap-3">
                        <div class="profile">
                            <div class="avatar gap-3">
                                <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
                                    <img src="${video.authors[0].profile_picture}" />

                                </div>
                                <h2 class="text-sm font-semibold truncate">Midnight Serenade</h2>
                            </div>

                            <div class="flex gap-2 pl-9 min-w-0 overflow-hidden">
                                <p class="text-sm text-gray-600 truncate">${video.authors[0].profile_name} •</p>
                                <p class="text-sm text-gray-600 whitespace-nowrap">${video.others.views} views</p>
                                <p class="text-sm text-gray-600 whitespace-nowrap">${video.others.posted_date} hours ago</p>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        `;

        videoContainer.append(videoCard);

    });
}






// getHoursAgo();
loadCategories();
loadVideos();
